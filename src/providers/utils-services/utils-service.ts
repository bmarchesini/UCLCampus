/*
    Copyright (c)  Université catholique Louvain.  All rights reserved
    Authors :  Jérôme Lemaire and Corentin Lamy
    Date : July 2017
    This file is part of UCLCampus
    Licensed under the GPL 3.0 license. See LICENSE file in the project root for full license information.

    UCLCampus is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    UCLCampus is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with UCLCampus.  If not, see <http://www.gnu.org/licenses/>.
*/
import { Loading, LoadingController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Market } from '@ionic-native/market';

@Injectable()
export class UtilsService {
    loading: Loading;
    shownGroup = null;

    constructor(
        private loadingCtrl: LoadingController,
        private device: Device,
        private appAvailability: AppAvailability,
        private iab: InAppBrowser,
        private market: Market
    ) { }

    presentLoading() {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.loading.present();
        }
    }

    dismissLoading() {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    }

    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    }

    isGroupShown(group) {
        return this.shownGroup === group;
    }

    launchExternalApp(page) {
        let app: string;
        let check: string;
        if (this.device.platform === 'iOS') {
            app = page.iosSchemaName;
            check = page.appUrl;
        } else if (this.device.platform === 'Android') {
            app = page.androidPackageName;
            check = app;
        } else {
            const browser = this.iab.create(page.httpUrl, '_system');
            browser.close();
        }
        this.appAvailability.check(check).then(
            () => {
                const browser = this.iab.create(page.appUrl, '_system');
                browser.close();
            },
            () => {
                this.market.open(app);
            }
        );
    }
}