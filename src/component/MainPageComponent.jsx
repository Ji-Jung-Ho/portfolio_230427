import DeskTopComponent from './desktop/DeskTopComponent';
import MobileComponent from './mobile/MobileComponent';
import TabletComponent from './tablet/TabletComponent';
import { useMediaQuery } from 'react-responsive'

export default function MainComponent () {
  const isDeskTop = useMediaQuery({ minDeviceWidth: 1024 });
  const isTablet = useMediaQuery({ minDeviceWidth: 768, maxDeviceWidth: 1023 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

  return (
    <>
    {
      isMobile && <MobileComponent/>
    }
    {
      isTablet && <TabletComponent/>
    }
    {
      isDeskTop && <DeskTopComponent/>
    }
    </>
  );
};
