// eslint-disable-next-line import/no-cycle
import { 
    sampleRUM, 
    loadScript 
} from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
//<script type="text/javascript" src="//assets.adobedtm.com/2ea7ee22c8c2/ece9aa9bcf6f/launch-72284e178e44.min.js" data-airgap-id="95"></script>
loadScript('//assets.adobedtm.com/2ea7ee22c8c2/ece9aa9bcf6f/launch-72284e178e44.min.js',
{
  dataAirgapId:"95" 
});