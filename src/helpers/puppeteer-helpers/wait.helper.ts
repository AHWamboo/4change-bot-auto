export class WaitHelper {
  static async wait(milliseconds: number): Promise<void> {
    await new Promise((r) => setTimeout(r, milliseconds));
  }
}
