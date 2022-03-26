const puppeteer = require('puppeteer-extra');
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

const fs = require("fs")
const user = require("./random-user");

const URL = "https://admin.google.com/"

config = {
    modeCli: false,
    slowMotion: 0,
    lat: -6.208768433894752,
    long: 106.82197514514111
}

puppeteer.use(StealthPlugin());
const runWeb = data => {
    return new Promise(async(resolve, reject) => {
        const browser = await puppeteer.launch({ headless: config.modeCli, slowMo: config.slowMotion });
        const context = browser.defaultBrowserContext();
        const page = await context.newPage();

        account = {
            created: 0
        }

        async function createAccount() {
            user.generateUser(1, async(res) => {
                if (!res.status) {
                    return false;
                }

                const gfirstname = res.users[0].name.first
                const glastname = res.users[0].name.last
                const gemail = `${res.users[0].name.first}.${res.users[0].name.last}`
                const gpassword = data.password

                console.log(gfirstname+ "APAPAPPA")

                await Promise.all([
                    page.waitForSelector("#yDmH0d > c-wiz > div > div.V6S1ac.MhEL3d > div > div > div.Qo5roe.puiQBc > div > div.cDp9Qb > div > div > div > div > div > div > div.nRwyrc.CIy9F > div.UBGL3e.bjV8l > div.wPlpse.SvW1We > div > div.gWi4vf.GGGst > div:nth-child(1) > div > span > span", { visible: true })
                ]).then( () => {
                    page.click("#yDmH0d > c-wiz > div > div.V6S1ac.MhEL3d > div > div > div.Qo5roe.puiQBc > div > div.cDp9Qb > div > div > div > div > div > div > div.nRwyrc.CIy9F > div.UBGL3e.bjV8l > div.wPlpse.SvW1We > div > div.gWi4vf.GGGst > div:nth-child(1) > div > span > span")
                })

                await page.waitForTimeout(3000)
                
                const firstnameSelector = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.eo5OJ > div.zN9ddc > div > div > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
                await page.waitForSelector(firstnameSelector, { visible: true });

                await page.type(firstnameSelector, gfirstname, {
                    delay: 5
                }).then( async() => {
                    // await page.waitForTimeout(500)
                    const lastnameSelector = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.eo5OJ > div.TmsXn > div > div > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
                    await page.waitForSelector(lastnameSelector, { visible: true })
                    await page.type(lastnameSelector, glastname, {
                        delay: 5
                    }).then( async() => {
                        // await page.waitForTimeout(500)
                        const emailSelector = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.Ysc96e > div.pMskkb > div.rNrnac > div > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
                        await page.waitForSelector(emailSelector, { visible: true })
                        await page.type(emailSelector, gemail, { delay: 5 }).then( async() => {
                            await page.waitForTimeout(1000)
                            const go1 = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.kpsHHc > div > span"
                            await page.waitForSelector(go1, {visible: true});
                            await page.click(go1).then( async() => {
                                // await page.waitForTimeout(500)
                                const radioManual = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.fg04Oc > div.T7JWtb > c-wiz > div:nth-child(1) > div > span > label:nth-child(2) > div > div.SCWude > div"
                                await page.waitForSelector(radioManual, { visible: true })
                                await page.click(radioManual).then( async() => {
                                    // await page.waitForTimeout(500)
                                    const radioManual = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.fg04Oc > div.T7JWtb > c-wiz > div:nth-child(1) > div > span > label:nth-child(2) > div > div.SCWude > div"
                                    await page.waitForSelector(radioManual, { visible: true })
                                    await page.click(radioManual).then( async() => {
                                        // await page.waitForTimeout(500)
                                        const passwordManual = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.fg04Oc > div.T7JWtb > c-wiz > div.o5VxR.ti6hGc > label > div > div.rq8Mwb"
                                        await page.waitForSelector(passwordManual, { visible: true })
                                        await page.click(passwordManual).then( async() => {
                                            // await page.waitForTimeout(500)
                                            const passwordSelector = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.chGwx.hqTsLb.nAZzG.PBWx0c > span > div > div.fg04Oc > div.T7JWtb > c-wiz > div.o5VxR.ti6hGc > div > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
                                            await page.waitForSelector(passwordSelector, { visible: true })
                                            await page.type(passwordSelector, gpassword, {delay: 5}).then( async() => {
                                                // await page.waitForTimeout(1000);
                                                const konfirmSelector = "#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.Up8vH.hFEqNb.J9Nfi.iWO5td.oZ1eob.VpW88d > span > c-wiz > div > span > div > c-wiz > div.IiN9nd > div.U26fgb.O0WRkf.zZhnYe.e3Duub.C0oVfc.cqaoef.vH29l.M9Bg4d > span > span"
                                                await page.waitForSelector(konfirmSelector, { visible: true })
                                                await page.click(konfirmSelector).then( async() => {
                                                    await Promise.all([
                                                        page.waitForSelector("#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.GQQgDc.Up8vH.Whe8ub.hFEqNb.J9Nfi.iWO5td > span > div > span > div > div.oxkSlb > div.F8i4b > div > div.ZFr60d.CeoRYc", { visible: true})
                                                    ]).then( async() => {
                                                        page.click("#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.m378kd.GQQgDc.Up8vH.Whe8ub.hFEqNb.J9Nfi.iWO5td > span > div > span > div > div.oxkSlb > div.F8i4b > div > div.ZFr60d.CeoRYc")
                                                        account.created++
                                                        fs.writeFile('accounts.txt', `${gemail}@${data.domain}|${password}\n`, { flag: 'a+' }, err => {})
                                                        if (account.created < data.total) {
                                                            await createAccount()
                                                        }else {
                                                            browser.close();
                                                        }
                                                    })
                            
                                                    await page.waitForTimeout(2000)
                                                    return true;
                                                })
                                            })
                                        })
                                    })
                                })
                            })
    
                        })
                    })
    
                });
            })
        }

        page.on('load', async() => {
            console.info(`LOADED: ${page.url()}`);
            if (page.url().includes("signin/v2")) {
                console.log("LOGIN PAGE");
                await page.waitForSelector('#identifierId', { visible: true });
                await page.type('#identifierId', data.admin.email, {
                    delay: 5
                });
                await page.click('[type="submit"],#identifierNext')

                await page.waitForSelector(`input[type="password"]`, { visible: true });
                await page.type(`input[type="password"]`, data.admin.password, {
                    delay: 5,
                });
                await page.click('[type="submit"],#passwordNext');

                await Promise.race([
                    page.isClosed,
                    page.waitForSelector("#accept", {visible: true, timeout: 0}).then( () => {
                        page.click("#accept");
                    })
                ])
            }

            if (page.url() == URL) {
                page.goto(URL+"ac/users")
            }

            if (page.url().includes(URL+"ac/users")) {
                await createAccount();
            }
        });

        page.on('frameattached', async(frame) => {
            console.info(`FRAME-ATTACHED: ${frame.url()}`);
        });

        page.on('framedetached', async(frame) => {
            console.info(`FRAME-DETACHED: ${frame.url()}`);
        });

        await page.goto(`${URL}`, {waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 0});
    });
}


const password = "@@Nxuser123z"
const admin = {
    email: "kontakt@twojegwiazdy.pl",
    password: "Kontol90!@#",
    emailRecovery: ""
}
// user.generateUser(1, async(results) => {
//     if (!results.status) {
//         console.log(">> Failed Generate User")
//         return;
//     }

//     for (var user of results.users) {
//         var data = {
//             admin: admin,
//             email: user.email.split("@")[0],
//             firstname: user.name.first,
//             lastname: user.name.last,
//             password: password
//         }

//         const resp = await runWeb(data)
//     }
// });

var data = {
    admin: admin,
    password: password,
    total: 30,
    domain: admin.email.split("@")[1]
}
runWeb(data)