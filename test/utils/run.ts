import { spawn } from "child_process";
import { AutorestOptions } from "../../src/autorestSession";
import { onExit } from "./childProcessOnExit";

/**
 * Run autorest command
 */
export async function runAutorest(
  swaggerPath: string,
  options: AutorestOptions,
  debugging?: boolean,
  extraParams?: string[]
) {
  const {
    tracingInfo,
    allowInsecureConnection,
    useCoreV2,
    licenseHeader,
    outputPath,
    packageDetails,
    addCredentials,
    credentialScopes,
    disablePagingAsyncIterators,
    hideClients,
    ignoreNullableOnOptional,
    title,
    restLevelClient,
    rlcShortcut,
    headAsBoolean,
    isTestPackage,
    generateTest
  } = options;
  let autorestCommand = `autorest${
    /^win/.test(process.platform) ? ".cmd" : ""
  }`;
  let commandArguments: string[] = [`--typescript`];

  if (tracingInfo) {
    commandArguments.push(
      `--tracing-info.namespace=${tracingInfo.namespace}`,
      `--tracing-info.packagePrefix="${tracingInfo.packagePrefix}"`
    );
  }
  if (credentialScopes !== undefined && credentialScopes.length > 0) {
    commandArguments.push(`--credential-scopes=${credentialScopes.join(",")}`);
  }
  let inputFileCommand: string = `${swaggerPath}`;
  if (!swaggerPath.endsWith(".md")) {
    inputFileCommand = `--input-file=${inputFileCommand}`;
  }
  if (useCoreV2 !== undefined) {
    commandArguments.push(`--use-core-v2=${useCoreV2}`);
  }
  if (restLevelClient === true) {
    commandArguments.push(`--rest-level-client=${restLevelClient}`);
  }
  if (rlcShortcut === true) {
    commandArguments.push(`--rlc-shortcut=true`);
  }
  if (title !== undefined) {
    commandArguments.push(`--title=${title}`);
  }
  if (ignoreNullableOnOptional !== undefined) {
    commandArguments.push(
      `--ignore-nullable-on-optional=${ignoreNullableOnOptional}`
    );
  }
  if (headAsBoolean !== undefined) {
    commandArguments.push(`--head-as-boolean=${headAsBoolean}`);
  }
  if (allowInsecureConnection !== undefined) {
    commandArguments.push(
      `--allow-insecure-connection=${allowInsecureConnection}`
    );
  }
  if (disablePagingAsyncIterators !== undefined) {
    commandArguments.push(
      `--disable-async-iterators=${disablePagingAsyncIterators}`
    );
  }
  if (hideClients) {
    commandArguments.push(`--hide-clients=${hideClients}`);
  }

  if (isTestPackage) {
    commandArguments.push(`--is-test-package=${isTestPackage}`);
  }

  if (generateTest) {
    commandArguments.push(`--generate-test=${generateTest}`);
  }

  if (licenseHeader !== undefined) {
    commandArguments.push(`--license-header=${licenseHeader}`);
  }
  if (addCredentials !== undefined) {
    commandArguments.push(`--add-credentials=${!!addCredentials}`);
  }
  if (packageDetails.version !== "") {
    commandArguments.push(`--package-version=${packageDetails.version}`);
  }

  commandArguments.push(
    inputFileCommand,
    "--version=3.6.6",
    "--clear-output-folder=true",
    `--output-folder=${outputPath}`,
    `--use=.`,
    `--package-name=${packageDetails.name}`,
    `--memory=8g`
  );
  if (debugging) {
    commandArguments.push(`--typescript.debugger`);
  }

  if (extraParams !== undefined && extraParams.length > 0) {
    commandArguments = commandArguments.concat(extraParams);
  }
  const generationTask = async () => {
    console.log(`=== Start ${title} ===`);
    const childProcess = spawn(autorestCommand, commandArguments, {
      stdio: [process.stdin, process.stdout, process.stderr],
      shell: process.platform === "win32"
    });

    console.log(`${autorestCommand} ${commandArguments.join(" ")}`);

    const result = await onExit(childProcess);
    console.log(`=== End ${title} ===`);
    return result;
  };

  try {
    await generationTask();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
