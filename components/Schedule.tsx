'use client'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

// Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license key
import { registerLicense } from '@syncfusion/ej2-base';

//import the loadCldr from ej2-base
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/es/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/es/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/es/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

import locales from "./locales.json"

loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);

L10n.load(locales);

registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhLYVtpR2Nbek5zfldAallWVBYiSV9jS3tTdEViWHpcdnFSRGNYVA==");

function CalendarApp() {

    return (
        <div>
            <ScheduleComponent locale='es'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}

export default CalendarApp