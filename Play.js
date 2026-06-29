

(function () {

    const params = new URLSearchParams(window.location.search);

    const title = params.get("title") || "Unknown Song";
    const file = params.get("file") || "";

    const titleEl = document.getElementById("title");
    if (titleEl) {
        titleEl.textContent = title;
    }

    const audio = document.getElementById("audio");

    if (!audio) {
        console.error("Audio element not found.");
        return;
    }

    if (!file) {
        console.error("No audio file received.");

        titleEl.textContent = "Song not found";
        return;
    }

    // `file` is expected to be the mp3 filename (ex: "Asake_-_Lonely_At_The_Top.mp3")
    // Backend serves it at `/music/<filename>`.

const decoded = decodeURIComponent(file);

// Use the exact path passed from the previous page
audio.src = decoded;

audio.load();

audio.play().catch(error => {
    console.log("Autoplay blocked by browser.", error);
});

    audio.load();

    audio.play().catch(error => {
        console.log("Autoplay blocked by browser.", error);
    });

    const download = document.getElementById("download");

    if (download) {
        download.href = decoded;

        download.download = title + ".mp3";
    }


})();

const songs = [
{
    title: '1da Banton Ft Kizz Daniel Tiwa Savage - No Wahala Remix - Copy',
    file: './1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_ - Copy.mp3'
},

{
    title: '1da Banton Ft Kizz Daniel Tiwa Savage - No Wahala Remix',
    file: './1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_.mp3'
},

{
    title: 'Olamide - Cup Of Tea',
    file: './08-Olamide-Cup-Of-Tea-JustNaija.com_.mp3'
},

{
    title: '9ice - 15 Pete Pete Ft Asa',
    file: './9-Ice-15-Pete-Pete-Feat-Asa.mp3'
},

{
    title: '9ice Ft Bella Shmurda - Low Key',
    file: './9ice-Ft-Bella-Shmurda-Low-Key-(TrendyBeatz.com).mp3'
},

{
    title: 'Adekunle Gold Ft Davido - High',
    file: './Adekunle_Gold_Ft_Davido_-_High.mp3'
},

{
    title: 'Adekunle Gold Ft Lucky Daye - Sinner',
    file: './Adekunle_Gold_ft_Lucky_Daye_-_Sinner.mp3'
},

{
    title: 'Adekunle Gold - Omo Eko',
    file: './Adekunle-Gold---Omo-Eko.mp3'
},

{
    title: 'Adekunle Gold Ft DJ Spinall - Cloud 9',
    file: './Adekunle-Gold-Ft-DJ-Spinall-Cloud-9-(TrendyBeatz.com).mp3'
},

{
    title: 'Another Trip Around The Sun',
    file: './Another trip around the sun .mp3'
},

{
    title: 'Asake - 2:30',
    file: './Asake_-_2_30.mp3'
},

{
    title: 'Asake - Lonely At The Top',
    file: './Asake_-_Lonely_At_The_Top.mp3'
},

{
    title: 'Asake Ft Olamide - Trabaye',
    file: './Asake_Ft_Olamide_-_Trabaye.mp3'
},

{
    title: 'Asake - Dull',
    file: './Asake-Dull-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake Ft Fireboy DML - Bandana',
    file: './Asake-Ft-Fireboy-DML-Bandana-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake Ft Olamide - Amapiano',
    file: './Asake-Ft-Olamide-Amapiano-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake Ft Russ - Reason',
    file: './Asake-Ft-Russ-Reason-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake Ft Tiwa Savage - Loaded',
    file: './Asake-Ft-Tiwa-Savage-Loaded-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake - Joha',
    file: './Asake-Joha-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake - Nzaza',
    file: './Asake-Nzaza-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake - Organise',
    file: './Asake-Organise-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Asake - Peace Be Unto You (PBUY)',
    file: './Asake-Peace-Be-Unto-You-PBUY.mp3'
},

{
    title: 'Asake - Sungba Remix Ft Burna Boy',
    file: './Asake-Sungba-Remix-ft.-Burna-Boy.mp3'
},

{
    title: 'Asake - Terminator',
    file: './Asake-Terminator-(TrendyBeatz.com).mp3'
},

{
    title: 'AUD-20260501-WA0008',
    file: './AUD-20260501-WA0008.mp3'
},

{
    title: 'Ayra Starr - Bloody Samaritan',
    file: './Ayra_Starr_-_Bloody_Samaritan.mp3'
},

{
    title: 'Ayra Starr - Stability',
    file: './Ayra_starr_-_Stability_Niggaloaded.com.ng.mp3'
},

{
    title: 'Ayra Starr Drill Refix By Precious - Pele O',
    file: './Ayra_Starr_Drill_Refix_by_Precious_-_Pele_o.mp3'
},

{
    title: 'Ayra Starr Ft CKay - Beggie Beggie',
    file: './Ayra-Starr-Beggie-Beggie-ft-CKay-(TrendyBeatz.com).mp3'
},

{
    title: 'Ayra Starr - Rush',
    file: './Ayra-Starr-Rush-Naijahits-com.mp3'
},

{
    title: 'Ayra Starr - Toxic',
    file: './Ayra-Starr-Toxic-(TrendyBeatz.com).mp3'
},

{
    title: 'Backpack Bounce',
    file: './Backpack Bounce (1).mp3'
},

{
    title: 'Bella Shmurda Ft Nasty C - Philo Remix',
    file: './Bella-Shmurda-Ft-Nasty-C-Philo-Remix-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Bella Shmurda - Level Up',
    file: './Bella-Shmurda-Level-Up-(TrendyBeatz.com).mp3'
},

{
    title: 'Berri Tiga Ft Carter Efe - Machala',
    file: './Berri-Tiga-Ft-Carter-Efe-Machala-(TrendyBeatz.com).mp3'
},

{
    title: 'Black Sherif - Kwaku The Traveller',
    file: './Black_Sherif_-_Kwaku_The_Traveller.mp3'
},

{
    title: 'BNXN Ft Kizz Daniel & Seyi Vibez - Gwagwalada',
    file: './BNXN_Buju_Ft_Kizz_Daniel_Seyi_Vibez_-_Gwagalada.mp3'
},

{
    title: 'BNXN (fka Buju) Ft Kizz Daniel & Seyi Vibez - Gwagwalada',
    file: './BNXN-fka-Buju-Ft-Kizz-Daniel-and-Seyi-Vibez-Gwagwalada-(TrendyBeatz.com).mp3'
},

{
    title: 'BNXN Ft Minz & Blaqbonez - Wo Wo Remix',
    file: './BNXN-Ft-Minz-and-Blaqbonez-Wo-Wo-Remix-(TrendyBeatz.com).mp3'
},

{
    title: 'Boy Spyce - Folake',
    file: './Boy_Spyce_-_Folake_VistaNaija.Com.mp3'
},

{
    title: 'Buju Ft Pheelz - Finesse',
    file: './Buju-Ft-Pheelz-Finesse-(TrendyBeatz.com).mp3'
},

{
    title: 'Buju Ft Pheelz - If I Broke Na My Business',
    file: './Buju-Ft-Pheelz-If-I-Broke-Na-My-Business-(TrendyBeatz.com).mp3'
},

{
    title: 'Burna Boy - It's Plenty',
    file: './Burna_Boy_-_It_s_Plenty_042jam.com.mp3'
},

{
    title: 'Burna Boy - Last Last',
    file: './Burna_Boy_-_Last_Last_042jam.com.mp3'
},

{
    title: 'Burna Boy Ft Wizkid - Ballon D'or',
    file: './Burna_Boy_ft_Wizkid_-_Ballon_D_or.mp3'
},

{
    title: 'CKay - Emiliana',
    file: './Ckay_-_Emiliana.mp3'
},

{
    title: 'CKAY - Love Nwantiti',
    file: './CKAY_-_LOVE_NWANTINTI.mp3'
},

{
    title: 'CKay Ft Joeboy & Kuami Eugene - Love Nwantiti Remix',
    file: './Ckay_ft_Joeboy_Kuami_Eugene_-_Love_Nwantiti_Remix_.mp3'
},

{
    title: 'CKay Ft Davido, Focalistic & Abidoza - Watawi',
    file: './Ckay-Ft-Davido-Focalistic-and-Abidoza-Watawi-(TrendyBeatz.com).mp3'
},

{
    title: 'Davido - Feel',
    file: './Davido_-_Feel.mp3'
},
{
    title: 'Davido Ft Asake - No Competition',
    file: './Davido_Ft_Asake_-_No_Competition.mp3'
},

{
    title: 'Davido Ft Musa Keys - Unavailable',
    file: './Davido_Ft_Musa_Keys_-_Unavailable.mp3'
},

{
    title: 'Davido Ft Skepta - U',
    file: './Davido_Ft_Skepta_-_U.mp3'
},

{
    title: 'Davido - Animashaun Ft Yonda',
    file: './Davido-Animashaun-feat-Yonda-[TrendyBeatz.com].mp3'
},

{
    title: 'Davido - Flora My Flawa',
    file: './Davido–Flora-My-Flawa-(TrendyBeatz.com).mp3'
},

{
    title: 'DJ Neptune Ft Omah Lay & Joeboy - Abeg',
    file: './DJ_Neptune_Ft_Omah_Lay_Joeboy_-_Abeg.mp3'
},

{
    title: 'DJ Spinall Ft Adekunle Gold - Cloud 9',
    file: './DJ_Spinall_Ft_Adekunle_Gold_-_Cloud_9.mp3'
},

{
    title: 'DJ Spinall Ft Asake - Palazzo',
    file: './DJ_Spinall_Ft_Asake_-_Palazzo.mp3'
},

{
    title: 'DJ Spinall Ft Wizkid - Loju',
    file: './DJ-Spinall-Ft-Wizkid-Loju-(TrendyBeatz.com).mp3'
},

{
    title: 'Drake - Hotline Bling',
    file: './Drake_-_Hotline_Bling_[NaijaGreen.Com]_.mp3'
},

{
    title: 'Fave - Beautifully',
    file: './Fave-Beautifully-(TrendyBeatz.com).mp3'
},

{
    title: 'Fireboy DML - Someone',
    file: './Fireboy_DML_-_Someone.mp3'
},

{
    title: 'Fireboy DML Ft Ed Sheeran - Peru Remix',
    file: './Fireboy_DML_Ft_Ed_Sheeran_-_Peru_Remix_.mp3'
},

{
    title: 'Flavour Ft Umu Obiligbo - Odogwu',
    file: './Flavour-Ft-Umu-Obiligbo-Odogwu-(TrendyBeatz.com).mp3'
},

{
    title: 'Flavour - Ijele Ft Zoro',
    file: './Flavour-Ijele-feat.Zoro-[TrendyBeatz.com].mp3'
},

{
    title: 'Goya Menor & Nektunez - Ameno Amapiano Remix',
    file: './Goya_Menor_Nektunez_-_Ameno_Amapiano_Remix_.mp3'
},

{
    title: 'Imagine Dragons - America',
    file: './Imagine_Dragons_-_America.mp3'
},

{
    title: 'Imagine Dragons - Follow You',
    file: './Imagine_Dragons_-_Follow_You.mp3'
},

{
    title: 'Imagine Dragons - Demons (Sped Up)',
    file: './Imagine-Dragons-demons-sped-up-(HiphopKit.com).mp3'
},

{
    title: 'Imagine Dragons - Monday',
    file: './Imagine-Dragons-Monday-(HiphopKit.com).mp3'
},

{
    title: 'Imagine Dragons - Sharks',
    file: './Imagine-Dragons-Sharks_-_Soloplay.ng.mp3'
},

{
    title: 'Joeboy - Alcohol',
    file: './Joeboy_-_Alcohol.mp3'
},

{
    title: 'Joeboy - Cubana',
    file: './Joeboy_-_Cubana.mp3'
},

{
    title: 'K1 De Ultimate - Ade Ori Okin',
    file: './K1-D-Ultimate-Ade-Ori-Okin.mp3'
},

{
    title: 'K1 De Ultimate - Majo Nisho',
    file: './K1-De-Ultimate-Majo-Nisho.mp3'
},
{
    title: 'Kcee - Ojapiano',
    file: './Kcee_-_Ojapiano.mp3'
},

{
    title: 'Kizz Daniel - Eh God (Barnabas)',
    file: './Kizz_Daniel_-_Eh_God_Barnabas_.mp3'
},

{
    title: 'Kizz Daniel - Pour Me Water Remix',
    file: './Kizz_Daniel_-_Pour_Me_Water_Remix_.mp3'
},

{
    title: 'Kizz Daniel - Shu-Peru',
    file: './Kizz_Daniel_-_Shu-Peru.mp3'
},

{
    title: 'Kizz Daniel Ft Tekno - Buga',
    file: './Kizz_Daniel_ft_Tekno_-_Buga.mp3'
},

{
    title: 'Ladipoe Ft Fireboy DML - Running',
    file: './Ladipoe_ft_Fireboy_DML_-_Running.mp3'
},

{
    title: 'Lighthouse Family - Ocean Drive',
    file: './Lighthouse_Family_-_Ocean_Drive_[NaijaGreen.Com]_.mp3'
},

{
    title: 'Lil Kesh Ft Naira Marley - Korope',
    file: './Lil_Kesh_ft_Naira_Marley_-_Korope.mp3'
},

{
    title: 'Lil Nas X Ft Jack Harlow - Industry Baby',
    file: './Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3'
},

{
    title: 'Lojay Ft Sarz - Monalisa',
    file: './Lojay_Ft_Sarz_-_Monlisa.mp3'
},

{
    title: 'Mavins, Crayon, Ayra Starr, LADIPOE, Magixx & Boy Spyce - Overdose',
    file: './Mavins_Crayon_Ayra_Starr_LADIPOE_Magixx_Boy_Spyce_-_Overdose.mp3'
},

{
    title: 'Mavins Ft Rema, Ayra Starr, LADIPOE, Crayon, Bayanni, Boy Spyce, Magixx & Johnny Drille - Won Da Mo',
    file: './Mavins_Ft_Rema_Ayra_Starr_LadiPoe_Crayon_Bayanni_Boy_Spyce_Magixx_Johnny_Drille_-_Won_Da_Mo.mp3'
},

{
    title: 'Mayorkun Ft Victony - Holy Father',
    file: './Mayorkun_ft_Victony_-_Holy_Father-1.mp3'
},

{
    title: 'Mayorkun Ft Victony - Holy Father',
    file: './Mayorkun_ft_Victony_-_Holy_Father.mp3'
},

{
    title: 'MI Abaga - Bad Belle Ft Moti Cakes',
    file: './MI-Abaga-Bad-Belle-Feat-Moti-Cakes-[TrendyBeatz.com].mp3'
},

{
    title: 'Mohbad - Backside',
    file: './Mohbad_-_Backside_audio.mp3'
},

{
    title: 'Naira Marley - Kojosese',
    file: './Naira_Marley_Kojosese_9jaflaver.com_.mp3'
},

{
    title: 'Naira Marley Ft Busiswa - Coming',
    file: './Naira-marley-Coming-ft-Busiswa-Naira-marley-Coming-ft-Busiswa-(BeatzJam.com).mp3'
},

{
    title: 'Nathan Evans - Wellerman',
    file: './Nathan_Evans_-_Wellerman.mp3'
},

{
    title: 'Nero Ilaya - Toto Oba',
    file: './Nero Ilaya_Toto Oba.mp3'
},

{
    title: 'Olamide Ft Asake - Omo Ope',
    file: './Olamide-Ft-Asake-Omo-Ope-(TrendyBeatz.com).mp3'
},

{
    title: 'Olamide - Rock',
    file: './Olamide-Rock.mp3'
},

{
    title: 'Omah Lay - Free My Mind (Copy)',
    file: './Omah_Lay_-_Free_My_Mind - Copy.mp3'
},

{
    title: 'Omah Lay - Free My Mind',
    file: './Omah_Lay_-_Free_My_Mind.mp3'
},

{
    title: 'Omah Lay - Soso',
    file: './Omah_Lay_-_Soso.mp3'
},
{
    title: 'Omah Lay - Godly',
    file: './Omah-Lay-Godly-(TrendyBeatz.com).mp3'
},

{
    title: 'Otega - Shayo',
    file: './Otega-Shayo-(TrendyBeatz.com).mp3'
},

{
    title: 'Pheelz Ft Davido - Electricity',
    file: './Pheelz-Ft-Davido-Electricity-(TrendyBeatz.com).mp3'
},

{
    title: 'Poco Lee Ft Hotkid - Otilo (Izz Gone)',
    file: './Poco_Lee_Ft_Hotkid_-_Otilo_Izz_Gone_.mp3'
},

{
    title: 'Poco Lee x Portable x Olamide - Zazoo Zehh',
    file: './Poco_Lee_x_Portable_x_Olamide_-_Zazoo_Zehh.mp3'
},

{
    title: 'Reekado Banks - Ozumba Mbadiwe',
    file: './Reekado-Banks-Ozumba-Mbadiwe-(TrendyBeatz.com).mp3'
},

{
    title: 'Rema - Alien',
    file: './Rema_-_Alien.mp3'
},

{
    title: 'Rema - Holiday',
    file: './Rema_-_Holiday_Audio_.mp3'
},

{
    title: 'Rema - Bounce',
    file: './Rema-Bounce-Booty-Bounce-(TrendyBeatz.com).mp3'
},

{
    title: 'Rema - Calm Down',
    file: './Rema-Calm-Down.mp3'
},

{
    title: 'Rema - Charm',
    file: './Rema-Charm-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Rema - Dumebi',
    file: './Rema-Dumebi-[TrendyBeatz.com].mp3'
},

{
    title: 'Rema Ft Selena Gomez - Calm Down Remix',
    file: './Rema-Ft-Selena-Gomez-Calm-Down-Remix-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Rexxie Ft Skiibii & Naira Marley - Abracadabra',
    file: './Rexxie-Ft-Skiibii-and-Naira-Marley-Abracadabra-(TrendyBeatz.com).mp3'
},

{
    title: 'Ruger - Asiwaju',
    file: './Ruger_-_Asiwaju_Video_.mp3'
},

{
    title: 'Ruger - Bun Bun',
    file: './Ruger_-_Bun_Bun.mp3'
},

{
    title: 'Ruger - Dior',
    file: './Ruger_-_Dior.mp3'
},

{
    title: 'Ruger - Bounce',
    file: './Ruger-Bounce-(TrendyBeatz.com).mp3'
},

{
    title: 'Scroll Through the Sky',
    file: './Scroll Through the Sky.mp3'
},

{
    title: 'Second Sermon Remix Ft Burna Boy',
    file: './Second-Sermon-Remix-ft.-Burna-Boy.mp3'
},

{
    title: 'Seyi Vibez - Chance (Na Ham)',
    file: './Seyi_Vibez_-_Chance_Na_Ham_.mp3'
},

{
    title: 'Seyi Vibez - Kunfaya Kun Be And It Is',
    file: './Seyi_Vibez_-_Kunfaya_Kun_Be_And_It_Is_.mp3'
},

{
    title: 'Seyi Vibez - Hat-trick',
    file: './Seyi-Vibez---Hat-trick.mp3'
},

{
    title: 'Seyi Vibez - Bullion Van',
    file: './Seyi-Vibez-Bullion-Van-(TrendyBeatz.com).mp3'
},

{
    title: 'Seyi Vibez - Para Boi',
    file: './Seyi-Vibez-Para-Boi-(TrendyBeatz.com).mp3'
},
{
    title: 'Shaggy - Boombastic',
    file: './Shaggy_-_Boombastic_[NaijaGreen.Com]_.mp3'
},

{
    title: 'Simi Ft Joeboy - So Bad',
    file: './Simi_ft_Joeboy_-_So_Bad.mp3'
},

{
    title: 'Sisq Ft Beanie Siegel - Unleash The Dragon',
    file: './Sisq_ft_Beanie_Siegel_-_Unleash_The_Dragon_Qoret.com.mp3'
},

{
    title: 'Skiibi Ft Davido - Baddest Boy Remix',
    file: './Skiibi_Ft_Davido_Baddest_Boy_Remix_9jaflaver.com_.mp3'
},

{
    title: 'Skiibii Ft Davido - Baddest Boy Remix',
    file: './Skiibii_ft_Davido_-_Baddest_Boy_Remix_.mp3'
},

{
    title: 'Sleazy Stereo - SpongeBob SquarePants Remix',
    file: './Sleazy_Stereo_-_Spongebob_Squarepants_Remix_.mp3'
},

{
    title: 'Take Me Back',
    file: './Take_Me_Back.mp3'
},

{
    title: 'The Notorious B.I.G. - Notorious',
    file: './The-Notorious-B.I.G.-Notorious-B.I.G.-via-Naijafinix.com-Copy.mp3'
},

{
    title: 'Timaya - Sweet Us',
    file: './Timaya_-_SWEET_US.mp3'
},

{
    title: 'Tiwa Savage Ft Asake - Loaded',
    file: './Tiwa_Savage_ft_Asake_-_Loaded.mp3'
},

{
    title: "Tiwa Savage Ft Brandy - Somebody's Son",
    file: './Tiwa_Savage_Ft_Brandy_-_Somebody_s_Son.mp3'
},

{
    title: 'Tiwa Savage Ft Ayra Starr & Young Jonn - Stamina',
    file: './Tiwa-Savage-Ft-Ayra-Starr-and-Young-Jonn-Stamina-(TrendyBeatz.com).mp3'
},

{
    title: 'Tiwa Savage Ft Spyro - Who Is Your Guy Remix',
    file: './Tiwa-Savage-Ft-Spyro-Who-Is-Your-Guy-Remix-(TrendyBeatz.com).mp3'
},

{
    title: 'Victony Ft Omah Lay - Soweto Remix',
    file: './Victony_Ft_Omah_Lay_-_Soweto_Remix_.mp3'
},

{
    title: 'Victor AD - Billz',
    file: './Victor_AD_-_Billz.mp3'
},

{
    title: 'Voltage Of Hype Ft DJ Dabila - Amapiano Breakfast',
    file: './Voltage-Of-Hype-Ft-DJ-Dabila-Amapiano-Breakfast-(TrendyBeatz.com).mp3'
},

{
    title: 'Young Jonn Ft Olamide - Currency',
    file: './Young-Jonn-Ft-Olamide-Currency-New-Song-(TrendyBeatz.com).mp3'
},

{
    title: 'Young Jonn - Xtra Cool',
    file: './Young-Jonn-Xtra-Cool-(TrendyBeatz.com).mp3'
},

{
    title: 'Zinoleesky - Kilofeshe',
    file: './Zinoleesky_-_Kilofeshe.mp3'
},

{
    title: 'Zinoleesky - Many Things',
    file: './Zinoleesky_-_Many_Things.mp3'
},

{
    title: 'Zinoleesky Ft Adekunle Gold - Party No Dey Stop',
    file: './Zinoleesky-Ft-Adekunle-Gold-Party-No-Dey-Stop-(TrendyBeatz.com).mp3'
},

{
    title: 'Zlatan Ft Asake & Peruzzi - Mr Money Remix',
    file: './Zlatan-Ft-Asake-and-Peruzzi-Mr-Money-Remix-(TrendyBeatz.com).mp3'
},
];
