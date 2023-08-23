## API Report File for "@msinternal/widgetunion_dpg"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';

// @public (undocumented)
export type ColorType = "red" | "blue";

// @public (undocumented)
export interface CustomGet10Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet11Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet12Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet13Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet14Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet15Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet16Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet17Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet18Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet19Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet1Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet20Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet21Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet22Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet23Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet24Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet2Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet3Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet4Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet5Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet6Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet7Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet8Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGet9Options extends OperationOptions {
}

// @public (undocumented)
export interface CustomGetOptions extends OperationOptions {
}

// @public (undocumented)
export class DemoServiceClient {
    constructor(endpoint: string, options?: DemoServiceClientOptions);
    // (undocumented)
    customGet(options?: CustomGetOptions): Promise<Widget>;
    // (undocumented)
    customGet1(options?: CustomGet1Options): Promise<Widget1>;
    // (undocumented)
    customGet10(options?: CustomGet10Options): Promise<Widget10>;
    // (undocumented)
    customGet11(options?: CustomGet11Options): Promise<Widget11>;
    // (undocumented)
    customGet12(options?: CustomGet12Options): Promise<Widget12>;
    // (undocumented)
    customGet13(options?: CustomGet13Options): Promise<Widget13>;
    // (undocumented)
    customGet14(options?: CustomGet14Options): Promise<Widget14>;
    // (undocumented)
    customGet15(options?: CustomGet15Options): Promise<Widget15>;
    // (undocumented)
    customGet16(options?: CustomGet16Options): Promise<Widget16>;
    // (undocumented)
    customGet17(options?: CustomGet17Options): Promise<Widget17>;
    // (undocumented)
    customGet18(options?: CustomGet18Options): Promise<Widget18>;
    // (undocumented)
    customGet19(options?: CustomGet19Options): Promise<Widget19>;
    // (undocumented)
    customGet2(options?: CustomGet2Options): Promise<Widget2>;
    // (undocumented)
    customGet20(options?: CustomGet20Options): Promise<Widget20>;
    // (undocumented)
    customGet21(options?: CustomGet21Options): Promise<Widget21>;
    // (undocumented)
    customGet22(options?: CustomGet22Options): Promise<Widget22>;
    // (undocumented)
    customGet23(options?: CustomGet23Options): Promise<Widget23>;
    // (undocumented)
    customGet24(options?: CustomGet24Options): Promise<Widget24>;
    // (undocumented)
    customGet3(options?: CustomGet3Options): Promise<Widget3>;
    // (undocumented)
    customGet4(options?: CustomGet4Options): Promise<Widget4>;
    // (undocumented)
    customGet5(options?: CustomGet5Options): Promise<Widget5>;
    // (undocumented)
    customGet6(options?: CustomGet6Options): Promise<Widget6>;
    // (undocumented)
    customGet7(options?: CustomGet7Options): Promise<Widget7>;
    // (undocumented)
    customGet8(options?: CustomGet8Options): Promise<Widget8>;
    // (undocumented)
    customGet9(options?: CustomGet9Options): Promise<Widget9>;
}

// @public (undocumented)
export interface DemoServiceClientOptions extends ClientOptions {
}

// @public (undocumented)
export interface Widget {
    // (undocumented)
    color: ColorType;
    // (undocumented)
    readonly id: string;
    // (undocumented)
    weight: number;
}

// @public (undocumented)
export interface Widget1 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData1;
}

// @public (undocumented)
export interface Widget10 extends Widget {
    // (undocumented)
    data: WidgetData2[] | WidgetData3[];
}

// @public (undocumented)
export interface Widget11 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData4[];
}

// @public (undocumented)
export interface Widget12 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData5[];
}

// @public (undocumented)
export interface Widget13 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData1;
}

// @public (undocumented)
export interface Widget14 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData1[];
}

// @public (undocumented)
export interface Widget15 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData2;
}

// @public (undocumented)
export interface Widget16 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData2[];
}

// @public (undocumented)
export interface Widget17 extends Widget {
    // (undocumented)
    data: WidgetData1[] | WidgetData2;
}

// @public (undocumented)
export interface Widget18 extends Widget {
    // (undocumented)
    data: WidgetData1 | WidgetData2[];
}

// @public (undocumented)
export interface Widget19 extends Widget {
    // (undocumented)
    data: WidgetData2[] | WidgetData3;
}

// @public (undocumented)
export interface Widget2 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData2;
}

// @public (undocumented)
export interface Widget20 extends Widget {
    // (undocumented)
    data: WidgetData2 | WidgetData3[];
}

// @public (undocumented)
export interface Widget21 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData4;
}

// @public (undocumented)
export interface Widget22 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData4[];
}

// @public (undocumented)
export interface Widget23 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData5;
}

// @public (undocumented)
export interface Widget24 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData5[];
}

// @public (undocumented)
export interface Widget3 extends Widget {
    // (undocumented)
    data: WidgetData1 | WidgetData2;
}

// @public (undocumented)
export interface Widget4 extends Widget {
    // (undocumented)
    data: WidgetData2 | WidgetData3;
}

// @public (undocumented)
export interface Widget5 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData4;
}

// @public (undocumented)
export interface Widget6 extends Widget {
    // (undocumented)
    data: WidgetData0 | WidgetData5;
}

// @public (undocumented)
export interface Widget7 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData1[];
}

// @public (undocumented)
export interface Widget8 extends Widget {
    // (undocumented)
    data: WidgetData0[] | WidgetData2[];
}

// @public (undocumented)
export interface Widget9 extends Widget {
    // (undocumented)
    data: WidgetData1[] | WidgetData2[];
}

// @public (undocumented)
export interface WidgetData0 {
    // (undocumented)
    fooProp: string;
}

// @public (undocumented)
export interface WidgetData1 {
    // (undocumented)
    barProp: string;
}

// @public (undocumented)
export interface WidgetData2 {
    // (undocumented)
    fooProp: string;
}

// @public (undocumented)
export interface WidgetData3 {
    // (undocumented)
    barProp: string;
}

// @public (undocumented)
export interface WidgetData4 {
    // (undocumented)
    end?: Date;
    // (undocumented)
    start: Date;
}

// @public (undocumented)
export interface WidgetData5 {
    // (undocumented)
    data: Uint8Array;
}

// (No @packageDocumentation comment for this package)

```