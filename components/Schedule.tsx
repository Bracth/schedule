'use client'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

import '@schedule-x/theme-default/dist/index.css'

// Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license key
import { registerLicense } from '@syncfusion/ej2-base';

//import the loadCldr from ej2-base
import { Ajax, L10n, loadCldr } from '@syncfusion/ej2-base';
import frNumberData from '@syncfusion/ej2-cldr-data/main/es/numbers.json';
import frtimeZoneData from '@syncfusion/ej2-cldr-data/main/es/timeZoneNames.json';
import frGregorian from '@syncfusion/ej2-cldr-data/main/es/ca-gregorian.json';
import frNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(frNumberData, frtimeZoneData, frGregorian, frNumberingSystem);

let localeTexts = "";
const ajax = new Ajax('./locales.json', 'GET', false);
ajax.onSuccess = (value: string) => {
    localeTexts = value;
};
ajax.send();
L10n.load(JSON.parse(localeTexts));

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