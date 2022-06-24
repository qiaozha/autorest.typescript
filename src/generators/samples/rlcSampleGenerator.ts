import { TestCodeModel } from "@autorest/testmodeler/dist/src/core/model";
import { Project } from "ts-morph";
import { getAutorestOptions, getSession } from "../../autorestSession";
import * as fs from 'fs';
import * as path from 'path';
import * as hbs from "handlebars";
import { NameType, normalizeName } from "../../utils/nameUtils";
import { getLanguageMetadata } from "../../utils/languageHelpers";
import { transformBaseUrl } from "../../transforms/urlTransforms";

export function generateRLCSamples(model: TestCodeModel, project: Project) {
    const {
        generateSample,
        multiClient
    } = getAutorestOptions();
    const session = getSession();
    if (!generateSample || !model?.testModel?.mockTest?.exampleGroups) {
        return;
    }
    // Not supported to generate code for multi-client
    if (multiClient) {
        return;
    }
    try {
        const file = fs.readFileSync(path.join(__dirname, "rlcSamples.ts.hbs"), {
            encoding: "utf-8"
        });

        const sampleFileContents = hbs.compile(file, { noEscape: true });
        const sampleData = createSampleData(model);
        project.createSourceFile(`samples-dev/${sampleData.filename}.ts`, sampleFileContents(sampleData), {
            overwrite: true
        });
    } catch (error) {
        session.error("An error was encountered while handling sample generation", []);
        throw error;
    }
}

function createSampleData(model: TestCodeModel) {
    const {
        addCredentials,
        packageDetails
    } = getAutorestOptions();
    const clientFileName = normalizeName(
        getLanguageMetadata(model.language).name,
        NameType.File
    );
    const clientName = getLanguageMetadata(model.language).name;
    const clientInterfaceName = clientName.endsWith("Client") ? `${clientName}` : `${clientName}Client`;
    const { parameterNames } = transformBaseUrl(model);
    const hasUriParameter = !!parameterNames && parameterNames.length > 0, hasCredentials = addCredentials;
    const clientParameters = [];
    const clientParamAssignments = [];
    if (hasUriParameter && parameterNames.length === 1) {
        clientParamAssignments.push(`const ${parameterNames[0]} = process.env["ENDPOINT"] || "<${parameterNames[0]}>"`);
        clientParameters.push(`${parameterNames[0]}`);
    }
    if (hasCredentials) {
        clientParamAssignments.push("const credential = new DefaultAzureCredential();");
        clientParameters.push("credential");
    }
    return {
        filename: `${clientFileName}Sample`,
        clientParamAssignments,
        clientClassName: clientInterfaceName,
        clientPackageName: `${packageDetails.name}`,
        clientParameterNames: clientParameters.join(","),
        hasCredentials
    }

}