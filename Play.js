

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


const audio = new Audio(song.Audio);
audio.play();
const songs = [
    {
  title: '1da Banton Ft Kizz Daniel Tiwa Savage - No Wahala Remix (Copy)',
  Audio: './Music/1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_ - Copy.mp3'
},
{
  title: '1da Banton Ft Kizz Daniel Tiwa Savage - No Wahala Remix',
  Audio: './Music/1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_.mp3'
},
{
  title: 'Olamide - Cup Of Tea',
  Audio: './Music/08-Olamide-Cup-Of-Tea-JustNaija.com_.mp3'
},
{
  title: '9ice - Pete Pete Ft Asa',
  Audio: './Music/9-Ice-15-Pete-Pete-Feat-Asa.mp3'
},
{
  title: '9ice Ft Bella Shmurda - Low Key',
  Audio: './Music/9ice-Ft-Bella-Shmurda-Low-Key-(TrendyBeatz.com).mp3'
},
{
  title: 'Adekunle Gold Ft Davido - High',
  Audio: './Music/Adekunle_Gold_Ft_Davido_-_High.mp3'
},
{
  title: 'Adekunle Gold Ft Lucky Daye - Sinner',
  Audio: './Music/Adekunle_Gold_ft_Lucky_Daye_-_Sinner.mp3'
},
{
  title: 'Adekunle Gold - Omo Eko',
  Audio: './Music/Adekunle-Gold---Omo-Eko.mp3'
},
{
  title: 'Adekunle Gold Ft DJ Spinall - Cloud 9',
  Audio: './Music/Adekunle-Gold-Ft-DJ-Spinall-Cloud-9-(TrendyBeatz.com).mp3'
},
{
  title: 'Another Trip Around The Sun',
  Audio: './Music/Another trip around the sun .mp3'
},
{
  title: 'Asake - 2:30',
  Audio: './Music/Asake_-_2_30.mp3'
},
{
  title: 'Asake - Lonely At The Top',
  Audio: './Asake_-_Lonely_At_The_Top.mp3'
},
{
  title: 'Asake Ft Olamide - Trabaye',
  Audio: './Music/Asake_Ft_Olamide_-_Trabaye.mp3'
},
{
  title: 'Asake - Dull',
  Audio: './Music/Asake-Dull-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake Ft Fireboy DML - Bandana',
  Audio: './Music/Asake-Ft-Fireboy-DML-Bandana-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake Ft Olamide - Amapiano',
  Audio: './Music/Asake-Ft-Olamide-Amapiano-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake Ft Russ - Reason',
  Audio: './Music/Asake-Ft-Russ-Reason-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake Ft Tiwa Savage - Loaded',
  Audio: './Music/Asake-Ft-Tiwa-Savage-Loaded-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake - Joha',
  Audio: './Music/Asake-Joha-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake - Nzaza',
  Audio: './Music/Asake-Nzaza-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake - Organise',
  Audio: './Music/Asake-Organise-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Asake - Peace Be Unto You',
  Audio: './Music/Asake-Peace-Be-Unto-You-PBUY.mp3'
},
{
  title: 'Asake - Sungba Remix Ft Burna Boy',
  Audio: './Music/Asake-Sungba-Remix-ft.-Burna-Boy.mp3'
},
{
  title: 'Asake - Terminator',
  Audio: './Music/Asake-Terminator-(TrendyBeatz.com).mp3'
},
{
  title: 'AUD 20260501 WA0008',
  Audio: './Music/AUD-20260501-WA0008.mp3'
},
{
  title: 'Ayra Starr - Bloody Samaritan',
  Audio: './Music/Ayra_Starr_-_Bloody_Samaritan.mp3'
},
{
  title: 'Ayra Starr - Stability',
  Audio: './Music/Ayra_starr_-_Stability_Niggaloaded.com.ng.mp3'
},
{
  title: 'Ayra Starr - Pele O (Drill Refix)',
  Audio: './Music/Ayra_Starr_Drill_Refix_by_Precious_-_Pele_o.mp3'
},
{
  title: 'Ayra Starr Ft CKay - Beggie Beggie',
  Audio: './Music/Ayra-Starr-Beggie-Beggie-ft-CKay-(TrendyBeatz.com).mp3'
},
{
  title: 'Ayra Starr - Rush',
  Audio: './Music/Ayra-Starr-Rush-Naijahits-com.mp3'
},
{
  title: 'Ayra Starr - Toxic',
  Audio: './Music/Ayra-Starr-Toxic-(TrendyBeatz.com).mp3'
},
{
  title: 'Backpack Bounce',
  Audio: './Music/Backpack Bounce (1).mp3'
},
{
  title: 'Bella Shmurda Ft Nasty C - Philo Remix',
  Audio: './Music/Bella-Shmurda-Ft-Nasty-C-Philo-Remix-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Bella Shmurda - Level Up',
  Audio: './Music/Bella-Shmurda-Level-Up-(TrendyBeatz.com).mp3'
},
{
  title: 'Berri Tiga Ft Carter Efe - Machala',
  Audio: './Music/Berri-Tiga-Ft-Carter-Efe-Machala-(TrendyBeatz.com).mp3'
},
{
  title: 'Black Sherif - Kwaku The Traveller',
  Audio: './Music/Black_Sherif_-_Kwaku_The_Traveller.mp3'
},
{
  title: 'BNXN (Buju) Ft Kizz Daniel & Seyi Vibez - Gwagalada',
  Audio: './Music/BNXN_Buju_Ft_Kizz_Daniel_Seyi_Vibez_-_Gwagalada.mp3'
},
{
  title: 'BNXN (Buju) Ft Kizz Daniel & Seyi Vibez - Gwagalada',
  Audio: './Music/BNXN-fka-Buju-Ft-Kizz-Daniel-and-Seyi-Vibez-Gwagwalada-(TrendyBeatz.com).mp3'
},
{
  title: 'BNXN Ft Minz & Blaqbonez - Wo Wo Remix',
  Audio: './Music/BNXN-Ft-Minz-and-Blaqbonez-Wo-Wo-Remix-(TrendyBeatz.com).mp3'
},
{
  title: 'Boy Spyce - Folake',
  Audio: './Music/Boy_Spyce_-_Folake_VistaNaija.Com.mp3'
},
{
  title: 'Buju Ft Pheelz - Finesse',
  Audio: './Music/Buju-Ft-Pheelz-Finesse-(TrendyBeatz.com).mp3'
},
{
  title: 'Buju Ft Pheelz - If I Broke Na My Business',
  Audio: './Music/Buju-Ft-Pheelz-If-I-Broke-Na-My-Business-(TrendyBeatz.com).mp3'
},
{
  title: 'Burna Boy - It\'s Plenty',
  Audio: './Music/Burna_Boy_-_It_s_Plenty_042jam.com.mp3'
},
{
  title: 'Burna Boy - Last Last',
  Audio: './Music/Burna_Boy_-_Last_Last_042jam.com.mp3'
},
{
  title: 'Burna Boy Ft Wizkid - Ballon D\'or',
  Audio: './Music/Burna_Boy_ft_Wizkid_-_Ballon_D_or.mp3'
},
{
  title: 'CKay - Emiliana',
  Audio: './Music/Ckay_-_Emiliana.mp3'
},
{
  title: 'CKay - Love Nwantiti',
  Audio: './Music/CKAY_-_LOVE_NWANTINTI.mp3'
},
{
  title: 'CKay Ft Joeboy & Kuami Eugene - Love Nwantiti Remix',
  Audio: './Music/Ckay_ft_Joeboy_Kuami_Eugene_-_Love_Nwantiti_Remix_.mp3'
},
{
  title: 'CKay Ft Davido, Focalistic & Abidoza - Watawi',
  Audio: './Music/Ckay-Ft-Davido-Focalistic-and-Abidoza-Watawi-(TrendyBeatz.com).mp3'
},
{
  title: 'Davido - Feel',
  Audio: './Music/Davido_-_Feel.mp3'
},
{
  title: 'Davido Ft Asake - No Competition',
  Audio: './Music/Davido_Ft_Asake_-_No_Competition.mp3'
},
    {
  title: 'Davido - Feel',
  Audio: './Music/Davido_-_Feel.mp3'
},
{
  title: 'Davido Ft Asake - No Competition',
  Audio: './Music/Davido_Ft_Asake_-_No_Competition.mp3'
},
{
  title: 'Davido Ft Musa Keys - Unavailable',
  Audio: './Music/Davido_Ft_Musa_Keys_-_Unavailable.mp3'
},
{
  title: 'Davido Ft Skepta - U',
  Audio: './Music/Davido_Ft_Skepta_-_U.mp3'
},
{
  title: 'Davido - Animashaun feat Yonda',
  Audio: './Music/Davido-Animashaun-feat-Yonda-[TrendyBeatz.com].mp3'
},
{
  title: 'Davido - Flora My Flawa',
  Audio: './Music/Davido–Flora-My-Flawa-(TrendyBeatz.com).mp3'
},
{
  title: 'DJ Neptune Ft Omah Lay & Joeboy - Abeg',
  Audio: './Music/DJ_Neptune_Ft_Omah_Lay_Joeboy_-_Abeg.mp3'
},
{
  title: 'DJ Spinall Ft Adekunle Gold - Cloud 9',
  Audio: './Music/DJ_Spinall_Ft_Adekunle_Gold_-_Cloud_9.mp3'
},
{
  title: 'DJ Spinall Ft Asake - Palazzo',
  Audio: './Music/DJ_Spinall_Ft_Asake_-_Palazzo.mp3'
},
{
  title: 'DJ Spinall Ft Wizkid - Loju',
  Audio: './Music/DJ-Spinall-Ft-Wizkid-Loju-(TrendyBeatz.com).mp3'
},
{
  title: 'Drake - Hotline Bling',
  Audio: './Music/Drake_-_Hotline_Bling_[NaijaGreen.Com]_.mp3'
},
{
  title: 'Fave - Beautifully',
  Audio: './Music/Fave-Beautifully-(TrendyBeatz.com).mp3'
},
{
  title: 'Fireboy DML - Someone',
  Audio: './Music/Fireboy_DML_-_Someone.mp3'
},
{
  title: 'Fireboy DML Ft Ed Sheeran - Peru Remix',
  Audio: './Music/Fireboy_DML_Ft_Ed_Sheeran_-_Peru_Remix_.mp3'
},
{
  title: 'Flavour Ft Umu Obiligbo - Odogwu',
  Audio: './Music/Flavour-Ft-Umu-Obiligbo-Odogwu-(TrendyBeatz.com).mp3'
},
{
  title: 'Flavour - Ijele feat Zoro',
  Audio: './Music/Flavour-Ijele-feat.Zoro-[TrendyBeatz.com].mp3'
},
{
  title: 'Goya Menor & Nektunez - Ameno Amapiano Remix',
  Audio: './Music/Goya_Menor_Nektunez_-_Ameno_Amapiano_Remix_.mp3'
},
{
  title: 'Imagine Dragons - America',
  Audio: './Music/Imagine_Dragons_-_America.mp3'
},
{
  title: 'Imagine Dragons - Follow You',
  Audio: './Music/Imagine_Dragons_-_Follow_You.mp3'
},
{
  title: 'Imagine Dragons - Demons (Sped Up)',
  Audio: './Music/Imagine-Dragons-demons-sped-up-(HiphopKit.com).mp3'
},
{
  title: 'Imagine Dragons - Monday',
  Audio: './Music/Imagine-Dragons-Monday-(HiphopKit.com).mp3'
},
{
  title: 'Imagine Dragons - Sharks',
  Audio: './Music/Imagine-Dragons-Sharks_-_Soloplay.ng.mp3'
},
{
  title: 'Joeboy - Alcohol',
  Audio: './Music/Joeboy_-_Alcohol.mp3'
},
{
  title: 'Joeboy - Cubana',
  Audio: './Music/Joeboy_-_Cubana.mp3'
},
{
  title: 'K1 De Ultimate - Ade Ori Okin',
  Audio: './Music/K1-D-Ultimate-Ade-Ori-Okin.mp3'
},
{
  title: 'K1 De Ultimate - Majo Nisho',
  Audio: './Music/K1-De-Ultimate-Majo-Nisho.mp3'
},
{
  title: 'Kcee - Ojapiano',
  Audio: './Music/Kcee_-_Ojapiano.mp3'
},
{
  title: 'Kizz Daniel - Eh God Barnabas',
  Audio: './Music/Kizz_Daniel_-_Eh_God_Barnabas_.mp3'
},
{
  title: 'Kizz Daniel - Pour Me Water Remix',
  Audio: './Music/Kizz_Daniel_-_Pour_Me_Water_Remix_.mp3'
},
{
  title: 'Kizz Daniel - Shu Peru',
  Audio: './Music/Kizz_Daniel_-_Shu-Peru.mp3'
},
{
  title: 'Kizz Daniel Ft Tekno - Buga',
  Audio: './Music/Kizz_Daniel_ft_Tekno_-_Buga.mp3'
},
{
  title: 'Ladipoe Ft Fireboy DML - Running',
  Audio: './Music/Ladipoe_ft_Fireboy_DML_-_Running.mp3'
},
{
  title: 'Lighthouse Family - Ocean Drive',
  Audio: './Music/Lighthouse_Family_-_Ocean_Drive_[NaijaGreen.Com]_.mp3'
},
{
  title: 'Lil Kesh Ft Naira Marley - Korope',
  Audio: './Music/Lil_Kesh_ft_Naira_Marley_-_Korope.mp3'
},
{
  title: 'Lil Nas X Ft Jack Harlow - Industry Baby',
  Audio: './Music/Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3'
},
{
  title: 'Lojay Ft Sarz - Monalisa',
  Audio: './Music/Lojay_Ft_Sarz_-_Monlisa.mp3'
},
{
  title: 'Mavins - Overdose',
  Audio: './Music/Mavins_Crayon_Ayra_Starr_LADIPOE_Magixx_Boy_Spyce_-_Overdose.mp3'
},
{
  title: 'Mavins - Won Da Mo',
  Audio: './Music/Mavins_Ft_Rema_Ayra_Starr_LadiPoe_Crayon_Bayanni_Boy_Spyce_Magixx_Johnny_Drille_-_Won_Da_Mo.mp3'
},
{
  title: 'Mayorkun Ft Victony - Holy Father (1)',
  Audio: './Music/Mayorkun_ft_Victony_-_Holy_Father-1.mp3'
},
{
  title: 'Mayorkun Ft Victony - Holy Father',
  Audio: './Music/Mayorkun_ft_Victony_-_Holy_Father.mp3'
},
{
  title: 'MI Abaga - Bad Belle Ft Moti Cakes',
  Audio: './Music/MI-Abaga-Bad-Belle-Feat-Moti-Cakes-[TrendyBeatz.com].mp3'
},
{
  title: 'Mohbad - Backside',
  Audio: './Music/Mohbad_-_Backside_audio.mp3'
},
{
  title: 'Naira Marley - Kojosese',
  Audio: './Music/Naira_Marley_Kojosese_9jaflaver.com_.mp3'
},
{
  title: 'Naira Marley Ft Busiswa - Coming',
  Audio: './Music/Naira-marley-Coming-ft-Busiswa-Naira-marley-Coming-ft-Busiswa-(BeatzJam.com).mp3'
},
{
  title: 'Nathan Evans - Wellerman',
  Audio: './Music/Nathan_Evans_-_Wellerman.mp3'
},
{
  title: 'Nero Ilaya - Toto Oba',
  Audio: './Music/Nero Ilaya_Toto Oba.mp3'
},
{
  title: 'Olamide Ft Asake - Omo Ope',
  Audio: './Music/Olamide-Ft-Asake-Omo-Ope-(TrendyBeatz.com).mp3'
},
{
  title: 'Olamide - Rock',
  Audio: './Music/Olamide-Rock.mp3'
},
{
  title: 'Omah Lay - Free My Mind (Copy)',
  Audio: './Music/Omah_Lay_-_Free_My_Mind - Copy.mp3'
},
{
  title: 'Omah Lay - Free My Mind',
  Audio: './Music/Omah_Lay_-_Free_My_Mind.mp3'
},
    {
  title: 'Omah Lay - Soso',
  Audio: './Music/Omah_Lay_-_Soso.mp3'
},
{
  title: 'Omah Lay - Godly',
  Audio: './Music/Omah-Lay-Godly-(TrendyBeatz.com).mp3'
},
{
  title: 'Otega - Shayo',
  Audio: './Music/Otega-Shayo-(TrendyBeatz.com).mp3'
},
{
  title: 'Pheelz Ft Davido - Electricity',
  Audio: './Music/Pheelz-Ft-Davido-Electricity-(TrendyBeatz.com).mp3'
},
{
  title: 'Poco Lee Ft Hotkid - Otilo Izz Gone',
  Audio: './Music/Poco_Lee_Ft_Hotkid_-_Otilo_Izz_Gone_.mp3'
},
{
  title: 'Poco Lee x Portable x Olamide - Zazoo Zehh',
  Audio: './Music/Poco_Lee_x_Portable_x_Olamide_-_Zazoo_Zehh.mp3'
},
{
  title: 'Reekado Banks - Ozumba Mbadiwe',
  Audio: './Music/Reekado-Banks-Ozumba-Mbadiwe-(TrendyBeatz.com).mp3'
},
{
  title: 'Rema - Alien',
  Audio: './Music/Rema_-_Alien.mp3'
},
{
  title: 'Rema - Holiday',
  Audio: './Music/Rema_-_Holiday_Audio_.mp3'
},
{
  title: 'Rema - Bounce',
  Audio: './Music/Rema-Bounce-Booty-Bounce-(TrendyBeatz.com).mp3'
},
{
  title: 'Rema - Calm Down',
  Audio: './Music/Rema-Calm-Down.mp3'
},
{
  title: 'Rema - Charm',
  Audio: './Music/Rema-Charm-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Rema - Dumebi',
  Audio: './Music/Rema-Dumebi-[TrendyBeatz.com].mp3'
},
{
  title: 'Rema Ft Selena Gomez - Calm Down Remix',
  Audio: './Music/Rema-Ft-Selena-Gomez-Calm-Down-Remix-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Rexxie Ft Skiibii & Naira Marley - Abracadabra',
  Audio: './Music/Rexxie-Ft-Skiibii-and-Naira-Marley-Abracadabra-(TrendyBeatz.com).mp3'
},
{
  title: 'Ruger - Asiwaju',
  Audio: './Music/Ruger_-_Asiwaju_Video_.mp3'
},
{
  title: 'Ruger - Bun Bun',
  Audio: './Music/Ruger_-_Bun_Bun.mp3'
},
{
  title: 'Ruger - Dior',
  Audio: './Music/Ruger_-_Dior.mp3'
},
{
  title: 'Ruger - Bounce',
  Audio: './Music/Ruger-Bounce-(TrendyBeatz.com).mp3'
},
{
  title: 'Scroll Through the Sky',
  Audio: './Music/Scroll Through the Sky.mp3'
},
{
  title: 'Second Sermon Remix Ft Burna Boy',
  Audio: './Music/Second-Sermon-Remix-ft.-Burna-Boy.mp3'
},
{
  title: 'Seyi Vibez - Chance Na Ham',
  Audio: './Music/Seyi_Vibez_-_Chance_Na_Ham_.mp3'
},
{
  title: 'Seyi Vibez - Kunfaya Kun Be And It Is',
  Audio: './Music/Seyi_Vibez_-_Kunfaya_Kun_Be_And_It_Is_.mp3'
},
{
  title: 'Seyi Vibez - Hat-trick',
  Audio: './Music/Seyi-Vibez---Hat-trick.mp3'
},
{
  title: 'Seyi Vibez - Bullion Van',
  Audio: './Music/Seyi-Vibez-Bullion-Van-(TrendyBeatz.com).mp3'
},
{
  title: 'Seyi Vibez - Para Boi',
  Audio: './Music/Seyi-Vibez-Para-Boi-(TrendyBeatz.com).mp3'
},
{
  title: 'Shaggy - Boombastic',
  Audio: './Music/Shaggy_-_Boombastic_[NaijaGreen.Com]_.mp3'
},
{
  title: 'Simi Ft Joeboy - So Bad',
  Audio: './Music/Simi_ft_Joeboy_-_So_Bad.mp3'
},
{
  title: 'Sisq Ft Beanie Siegel - Unleash The Dragon',
  Audio: './Music/Sisq_ft_Beanie_Siegel_-_Unleash_The_Dragon_Qoret.com.mp3'
},
{
  title: 'Skiibi Ft Davido - Baddest Boy Remix',
  Audio: './Music/Skiibi_Ft_Davido_Baddest_Boy_Remix_9jaflaver.com_.mp3'
},
{
  title: 'Skiibii Ft Davido - Baddest Boy Remix',
  Audio: './Music/Skiibii_ft_Davido_-_Baddest_Boy_Remix_.mp3'
},
{
  title: 'Sleazy Stereo - Spongebob Squarepants Remix',
  Audio: './Music/Sleazy_Stereo_-_Spongebob_Squarepants_Remix_.mp3'
},
{
  title: 'Take Me Back',
  Audio: './Music/Take_Me_Back.mp3'
},
{
  title: 'The Notorious B.I.G. - Notorious B.I.G.',
  Audio: './Music/The-Notorious-B.I.G.-Notorious-B.I.G.-via-Naijafinix.com-Copy.mp3'
},
{
  title: 'Timaya - Sweet Us',
  Audio: './Music/Timaya_-_SWEET_US.mp3'
},
{
  title: 'Tiwa Savage Ft Asake - Loaded',
  Audio: './Music/Tiwa_Savage_ft_Asake_-_Loaded.mp3'
},
{
  title: 'Tiwa Savage Ft Brandy - Somebody's Son',
  Audio: './Music/Tiwa_Savage_Ft_Brandy_-_Somebody_s_Son.mp3'
},
{
  title: 'Tiwa Savage Ft Ayra Starr & Young Jonn - Stamina',
  Audio: './Music/Tiwa-Savage-Ft-Ayra-Starr-and-Young-Jonn-Stamina-(TrendyBeatz.com).mp3'
},
{
  title: 'Tiwa Savage Ft Spyro - Who Is Your Guy Remix',
  Audio: './Music/Tiwa-Savage-Ft-Spyro-Who-Is-Your-Guy-Remix-(TrendyBeatz.com).mp3'
},
{
  title: 'Victony Ft Omah Lay - Soweto Remix',
  Audio: './Music/Victony_Ft_Omah_Lay_-_Soweto_Remix_.mp3'
},
{
  title: 'Victor AD - Billz',
  Audio: './Music/Victor_AD_-_Billz.mp3'
},
{
  title: 'Voltage Of Hype Ft DJ Dabila - Amapiano Breakfast',
  Audio: './Music/Voltage-Of-Hype-Ft-DJ-Dabila-Amapiano-Breakfast-(TrendyBeatz.com).mp3'
},
{
  title: 'Young Jonn Ft Olamide - Currency',
  Audio: './Music/Young-Jonn-Ft-Olamide-Currency-New-Song-(TrendyBeatz.com).mp3'
},
{
  title: 'Young Jonn - Xtra Cool',
  Audio: './Music/Young-Jonn-Xtra-Cool-(TrendyBeatz.com).mp3'
},
{
  title: 'Zinoleesky - Kilofeshe',
  Audio: './Music/Zinoleesky_-_Kilofeshe.mp3'
},
{
  title: 'Zinoleesky - Many Things',
  Audio: './Music/Zinoleesky_-_Many_Things.mp3'
},
{
  title: 'Zinoleesky Ft Adekunle Gold - Party No Dey Stop',
  Audio: './Music/Zinoleesky-Ft-Adekunle-Gold-Party-No-Dey-Stop-(TrendyBeatz.com).mp3'
},
{
  title: 'Zlatan Ft Asake & Peruzzi - Mr Money Remix',
  Audio: './Music/Zlatan-Ft-Asake-and-Peruzzi-Mr-Money-Remix-(TrendyBeatz.com).mp3'
},
];
