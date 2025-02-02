// Webpack entrypoint.
// Use this to do any browser specific initialization and export the module as global object.

import { PackageManager, PackageManagerUi } from '../src/index';
console.log('loading Package Manager version [AIV]{version}[/AIV]...');
const packageManager = new PackageManager();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.packageManager = packageManager;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (globalThis.React && nexusclient.ui().layout().register_custom_tab && !nexusclient.platform().real_mobile() && !nexusclient.platform().is_desktop() ) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  nexusclient.ui().layout().register_custom_tab('npk_ui', <PackageManagerUi packageManager={packageManager} />);
}else{
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  nexusclient.display_notice('This platform is not supported by the package manager.')
}

console.log('Package Manager loaded');

export default { PackageManager };
