import { EditorClient, Panel } from 'lucid-extension-sdk';
export declare class RightPanel extends Panel {
    private static icon;
    constructor(client: EditorClient);
    protected messageFromFrame(message: any): Promise<void>;
}
