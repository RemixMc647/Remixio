window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  const resultsEl = document.getElementById('search-results');
  const form = document.getElementById('search-form');
  if (!input || !resultsEl) return;

  const dataset = [
{ id: '0', kind: 'track', title: 'Asake - Lonely At The Top', Audio: '../Asake_-_Lonely_At_The_Top.mp3' },
{ id: '1', kind: 'track', title: '1da Banton Ft Kizz Daniel & Tiwa Savage - No Wahala Remix', Audio: '../1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_ - Copy.mp3' },
{ id: '2', kind: 'track', title: '1da Banton Ft Kizz Daniel & Tiwa Savage - No Wahala Remix', Audio: '../1da_Banton_Ft_Kizz_Daniel_Tiwa_Savage_-_No_Wahala_Remix_.mp3' },
{ id: '3', kind: 'track', title: 'Olamide - Cup Of Tea', Audio: '../08-Olamide-Cup-Of-Tea-JustNaija.com_.mp3' },
{ id: '4', kind: 'track', title: '9ice - Pete Pete Ft Asa', Audio: '../9-Ice-15-Pete-Pete-Feat-Asa.mp3' },
{ id: '5', kind: 'track', title: '9ice Ft Bella Shmurda - Low Key', Audio: '../9ice-Ft-Bella-Shmurda-Low-Key-(TrendyBeatz.com).mp3' },
{ id: '6', kind: 'track', title: 'Adekunle Gold Ft Davido - High', Audio: '../Adekunle_Gold_Ft_Davido_-_High.mp3' },
{ id: '7', kind: 'track', title: 'Adekunle Gold Ft Lucky Daye - Sinner', Audio: '../Adekunle_Gold_ft_Lucky_Daye_-_Sinner.mp3' },
{ id: '8', kind: 'track', title: 'Adekunle Gold - Omo Eko', Audio: '../Adekunle-Gold---Omo-Eko.mp3' },
{ id: '9', kind: 'track', title: 'Adekunle Gold Ft DJ Spinall - Cloud 9', Audio: '../Adekunle-Gold-Ft-DJ-Spinall-Cloud-9-(TrendyBeatz.com).mp3' },
{ id: '10', kind: 'track', title: 'Another Trip Around The Sun', Audio: '../Another trip around the sun .mp3' },
{ id: '11', kind: 'track', title: 'Asake - 2:30', Audio: '../Asake_-_2_30.mp3' },
{ id: '12', kind: 'track', title: 'Asake - Lonely At The Top', Audio: '../Asake_-_Lonely_At_The_Top.mp3' },
{ id: '13', kind: 'track', title: 'Asake Ft Olamide - Trabaye', Audio: '../Asake_Ft_Olamide_-_Trabaye.mp3' },
{ id: '14', kind: 'track', title: 'Asake - Dull', Audio: '../Asake-Dull-New-Song-(TrendyBeatz.com).mp3' },
{ id: '15', kind: 'track', title: 'Asake Ft Fireboy DML - Bandana', Audio: '../Asake-Ft-Fireboy-DML-Bandana-(TrendyBeatz.com).mp3' },
{ id: '16', kind: 'track', title: 'Asake Ft Olamide - Amapiano', Audio: '../Asake-Ft-Olamide-Amapiano-New-Song-(TrendyBeatz.com).mp3' },
{ id: '17', kind: 'track', title: 'Asake Ft Russ - Reason', Audio: '../Asake-Ft-Russ-Reason-New-Song-(TrendyBeatz.com).mp3' },
{ id: '18', kind: 'track', title: 'Asake Ft Tiwa Savage - Loaded', Audio: '../Asake-Ft-Tiwa-Savage-Loaded-(TrendyBeatz.com).mp3' },
{ id: '19', kind: 'track', title: 'Asake - Joha', Audio: '../Asake-Joha-New-Song-(TrendyBeatz.com).mp3' },
{ id: '20', kind: 'track', title: 'Asake - Nzaza', Audio: '../Asake-Nzaza-New-Song-(TrendyBeatz.com).mp3' },
{ id: '21', kind: 'track', title: 'Asake - Organise', Audio: '../Asake-Organise-New-Song-(TrendyBeatz.com).mp3' },
{ id: '22', kind: 'track', title: 'Asake - Peace Be Unto You (PBUY)', Audio: '../Asake-Peace-Be-Unto-You-PBUY.mp3' },
{ id: '23', kind: 'track', title: 'Asake - Sungba Remix Ft Burna Boy', Audio: '../Asake-Sungba-Remix-ft.-Burna-Boy.mp3' },
{ id: '24', kind: 'track', title: 'Asake - Terminator', Audio: '../Asake-Terminator-(TrendyBeatz.com).mp3' },
{ id: '25', kind: 'track', title: 'AUD-20260501-WA0008', Audio: '../AUD-20260501-WA0008.mp3' },
{ id: '26', kind: 'track', title: 'Ayra Starr - Bloody Samaritan', Audio: '../Ayra_Starr_-_Bloody_Samaritan.mp3' },
{ id: '27', kind: 'track', title: 'Ayra Starr - Stability', Audio: '../Ayra_starr_-_Stability_Niggaloaded.com.ng.mp3' },
{ id: '28', kind: 'track', title: 'Ayra Starr Drill Refix By Precious - Pele O', Audio: '../Ayra_Starr_Drill_Refix_by_Precious_-_Pele_o.mp3' },
{ id: '29', kind: 'track', title: 'Ayra Starr - Beggie Beggie Ft CKay', Audio: '../Ayra-Starr-Beggie-Beggie-ft-CKay-(TrendyBeatz.com).mp3' },
{ id: '30', kind: 'track', title: 'Ayra Starr - Rush', Audio: '../Ayra-Starr-Rush-Naijahits-com.mp3' },
{ id: '31', kind: 'track', title: 'Ayra Starr - Toxic', Audio: '../Ayra-Starr-Toxic-(TrendyBeatz.com).mp3' },
{ id: '32', kind: 'track', title: 'Backpack Bounce', Audio: '../Backpack Bounce (1).mp3' },
{ id: '33', kind: 'track', title: 'Bella Shmurda Ft Nasty C - Philo Remix', Audio: '../Bella-Shmurda-Ft-Nasty-C-Philo-Remix-New-Song-(TrendyBeatz.com).mp3' },
{ id: '34', kind: 'track', title: 'Bella Shmurda - Level Up', Audio: '../Bella-Shmurda-Level-Up-(TrendyBeatz.com).mp3' },
{ id: '35', kind: 'track', title: 'Berri Tiga Ft Carter Efe - Machala', Audio: '../Berri-Tiga-Ft-Carter-Efe-Machala-(TrendyBeatz.com).mp3' },
{ id: '36', kind: 'track', title: 'Black Sherif - Kwaku The Traveller', Audio: '../Black_Sherif_-_Kwaku_The_Traveller.mp3' },
{ id: '37', kind: 'track', title: 'BNXN (Buju) Ft Kizz Daniel & Seyi Vibez - Gwagwalada', Audio: '../BNXN_Buju_Ft_Kizz_Daniel_Seyi_Vibez_-_Gwagalada.mp3' },
{ id: '38', kind: 'track', title: 'BNXN (Buju) Ft Kizz Daniel & Seyi Vibez - Gwagwalada', Audio: '../BNXN-fka-Buju-Ft-Kizz-Daniel-and-Seyi-Vibez-Gwagwalada-(TrendyBeatz.com).mp3' },
{ id: '39', kind: 'track', title: 'BNXN Ft Minz & Blaqbonez - Wo Wo Remix', Audio: '../BNXN-Ft-Minz-and-Blaqbonez-Wo-Wo-Remix-(TrendyBeatz.com).mp3' },
{ id: '40', kind: 'track', title: 'Boy Spyce - Folake', Audio: '../Boy_Spyce_-_Folake_VistaNaija.Com.mp3' },
{ id: '41', kind: 'track', title: 'Buju Ft Pheelz - Finesse', Audio: '../Buju-Ft-Pheelz-Finesse-(TrendyBeatz.com).mp3' },
{ id: '42', kind: 'track', title: 'Buju Ft Pheelz - If I Broke Na My Business', Audio: '../Buju-Ft-Pheelz-If-I-Broke-Na-My-Business-(TrendyBeatz.com).mp3' },
{ id: '43', kind: 'track', title: 'Burna Boy - It\'s Plenty', Audio: '../Burna_Boy_-_It_s_Plenty_042jam.com.mp3' },
{ id: '44', kind: 'track', title: 'Burna Boy - Last Last', Audio: '../Burna_Boy_-_Last_Last_042jam.com.mp3' },
{ id: '45', kind: 'track', title: 'Burna Boy Ft Wizkid - Ballon D\'or', Audio: '../Burna_Boy_ft_Wizkid_-_Ballon_D_or.mp3' },
{ id: '46', kind: 'track', title: 'CKay - Emiliana', Audio: '../Ckay_-_Emiliana.mp3' },
{ id: '47', kind: 'track', title: 'CKay - Love Nwantiti', Audio: '../CKAY_-_LOVE_NWANTINTI.mp3' },
{ id: '48', kind: 'track', title: 'CKay Ft Joeboy & Kuami Eugene - Love Nwantiti Remix', Audio: '../Ckay_ft_Joeboy_Kuami_Eugene_-_Love_Nwantiti_Remix_.mp3' },
{ id: '49', kind: 'track', title: 'CKay Ft Davido, Focalistic & Abidoza - Watawi', Audio: '../Ckay-Ft-Davido-Focalistic-and-Abidoza-Watawi-(TrendyBeatz.com).mp3' },
{ id: '50', kind: 'track', title: 'Davido - Feel', Audio: '../Davido_-_Feel.mp3' },
{ id: '51', kind: 'track', title: 'Davido Ft Asake - No Competition', Audio: '../Davido_Ft_Asake_-_No_Competition.mp3' },
{ id: '52', kind: 'track', title: 'Davido Ft Musa Keys - Unavailable', Audio: '../Davido_Ft_Musa_Keys_-_Unavailable.mp3' },
{ id: '53', kind: 'track', title: 'Davido Ft Skepta - U', Audio: '../Davido_Ft_Skepta_-_U.mp3' },
{ id: '54', kind: 'track', title: 'Davido Ft Yonda - Animashaun', Audio: '../Davido-Animashaun-feat-Yonda-[TrendyBeatz.com].mp3' },
{ id: '55', kind: 'track', title: 'Davido - Flora My Flawa', Audio: '../Davido–Flora-My-Flawa-(TrendyBeatz.com).mp3' },
{ id: '56', kind: 'track', title: 'DJ Neptune Ft Omah Lay & Joeboy - Abeg', Audio: '../DJ_Neptune_Ft_Omah_Lay_Joeboy_-_Abeg.mp3' },
{ id: '57', kind: 'track', title: 'DJ Spinall Ft Adekunle Gold - Cloud 9', Audio: '../DJ_Spinall_Ft_Adekunle_Gold_-_Cloud_9.mp3' },
{ id: '58', kind: 'track', title: 'DJ Spinall Ft Asake - Palazzo', Audio: '../DJ_Spinall_Ft_Asake_-_Palazzo.mp3' },
{ id: '59', kind: 'track', title: 'DJ Spinall Ft Wizkid - Loju', Audio: '../DJ-Spinall-Ft-Wizkid-Loju-(TrendyBeatz.com).mp3' },
{ id: '60', kind: 'track', title: 'Drake - Hotline Bling', Audio: '../Drake_-_Hotline_Bling_[NaijaGreen.Com]_.mp3' },
{ id: '61', kind: 'track', title: 'Fave - Beautifully', Audio: '../Fave-Beautifully-(TrendyBeatz.com).mp3' },
{ id: '62', kind: 'track', title: 'Fireboy DML - Someone', Audio: '../Fireboy_DML_-_Someone.mp3' },
{ id: '63', kind: 'track', title: 'Fireboy DML Ft Ed Sheeran - Peru Remix', Audio: '../Fireboy_DML_Ft_Ed_Sheeran_-_Peru_Remix_.mp3' },
{ id: '64', kind: 'track', title: 'Flavour Ft Umu Obiligbo - Odogwu', Audio: '../Flavour-Ft-Umu-Obiligbo-Odogwu-(TrendyBeatz.com).mp3' },
{ id: '65', kind: 'track', title: 'Flavour Ft Zoro - Ijele', Audio: '../Flavour-Ijele-feat.Zoro-[TrendyBeatz.com].mp3' },
{ id: '66', kind: 'track', title: 'Goya Menor & Nektunez - Ameno Amapiano Remix', Audio: '../Goya_Menor_Nektunez_-_Ameno_Amapiano_Remix_.mp3' },
{ id: '67', kind: 'track', title: 'Imagine Dragons - America', Audio: '../Imagine_Dragons_-_America.mp3' },
{ id: '68', kind: 'track', title: 'Imagine Dragons - Follow You', Audio: '../Imagine_Dragons_-_Follow_You.mp3' },
{ id: '69', kind: 'track', title: 'Imagine Dragons - Demons (Sped Up)', Audio: '../Imagine-Dragons-demons-sped-up-(HiphopKit.com).mp3' },
{ id: '70', kind: 'track', title: 'Imagine Dragons - Monday', Audio: '../Imagine-Dragons-Monday-(HiphopKit.com).mp3' },
{ id: '71', kind: 'track', title: 'Imagine Dragons - Sharks', Audio: '../Imagine-Dragons-Sharks_-_Soloplay.ng.mp3' },
{ id: '72', kind: 'track', title: 'Joeboy - Alcohol', Audio: '../Joeboy_-_Alcohol.mp3' },
{ id: '73', kind: 'track', title: 'Joeboy - Cubana', Audio: '../Joeboy_-_Cubana.mp3' },
{ id: '74', kind: 'track', title: 'K1 De Ultimate - Ade Ori Okin', Audio: '../K1-D-Ultimate-Ade-Ori-Okin.mp3' },
{ id: '75', kind: 'track', title: 'K1 De Ultimate - Majo Nisho', Audio: '../K1-De-Ultimate-Majo-Nisho.mp3' },
{ id: '76', kind: 'track', title: 'Kcee - Ojapiano', Audio: '../Kcee_-_Ojapiano.mp3' },
{ id: '77', kind: 'track', title: 'Kizz Daniel - Eh God (Barnabas)', Audio: '../Kizz_Daniel_-_Eh_God_Barnabas_.mp3' },
{ id: '78', kind: 'track', title: 'Kizz Daniel - Pour Me Water Remix', Audio: '../Kizz_Daniel_-_Pour_Me_Water_Remix_.mp3' },
{ id: '79', kind: 'track', title: 'Kizz Daniel - Shu Peru', Audio: '../Kizz_Daniel_-_Shu-Peru.mp3' },
{ id: '80', kind: 'track', title: 'Kizz Daniel Ft Tekno - Buga', Audio: '../Kizz_Daniel_ft_Tekno_-_Buga.mp3' },
{ id: '81', kind: 'track', title: 'Ladipoe Ft Fireboy DML - Running', Audio: '../Ladipoe_ft_Fireboy_DML_-_Running.mp3' },
{ id: '82', kind: 'track', title: 'Lighthouse Family - Ocean Drive', Audio: '../Lighthouse_Family_-_Ocean_Drive_[NaijaGreen.Com]_.mp3' },
{ id: '83', kind: 'track', title: 'Lil Kesh Ft Naira Marley - Korope', Audio: '../Lil_Kesh_ft_Naira_Marley_-_Korope.mp3' },
{ id: '84', kind: 'track', title: 'Lil Nas X Ft Jack Harlow - Industry Baby', Audio: '../Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3' },
{ id: '85', kind: 'track', title: 'Lojay Ft Sarz - Monalisa', Audio: '../Lojay_Ft_Sarz_-_Monlisa.mp3' },
{ id: '86', kind: 'track', title: 'Mavins (Crayon, Ayra Starr, LADIPOE, Magixx & Boy Spyce) - Overdose', Audio: '../Mavins_Crayon_Ayra_Starr_LADIPOE_Magixx_Boy_Spyce_-_Overdose.mp3' },
{ id: '87', kind: 'track', title: 'Mavins - Won Da Mo', Audio: '../Mavins_Ft_Rema_Ayra_Starr_LadiPoe_Crayon_Bayanni_Boy_Spyce_Magixx_Johnny_Drille_-_Won_Da_Mo.mp3' },
{ id: '88', kind: 'track', title: 'Mayorkun Ft Victony - Holy Father', Audio: '../Mayorkun_ft_Victony_-_Holy_Father-1.mp3' },
{ id: '89', kind: 'track', title: 'Mayorkun Ft Victony - Holy Father', Audio: '../Mayorkun_ft_Victony_-_Holy_Father.mp3' },
{ id: '90', kind: 'track', title: 'MI Abaga Ft Moti Cakes - Bad Belle', Audio: '../MI-Abaga-Bad-Belle-Feat-Moti-Cakes-[TrendyBeatz.com].mp3' },
{ id: '91', kind: 'track', title: 'Mohbad - Backside', Audio: '../Mohbad_-_Backside_audio.mp3' },
{ id: '92', kind: 'track', title: 'Naira Marley - Kojosese', Audio: '../Naira_Marley_Kojosese_9jaflaver.com_.mp3' },
{ id: '93', kind: 'track', title: 'Naira Marley Ft Busiswa - Coming', Audio: '../Naira-marley-Coming-ft-Busiswa-Naira-marley-Coming-ft-Busiswa-(BeatzJam.com).mp3' },
{ id: '94', kind: 'track', title: 'Nathan Evans - Wellerman', Audio: '../Nathan_Evans_-_Wellerman.mp3' },
{ id: '95', kind: 'track', title: 'Nero Ilaya - Toto Oba', Audio: '../Nero Ilaya_Toto Oba.mp3' },
{ id: '96', kind: 'track', title: 'Olamide Ft Asake - Omo Ope', Audio: '../Olamide-Ft-Asake-Omo-Ope-(TrendyBeatz.com).mp3' },
{ id: '97', kind: 'track', title: 'Olamide - Rock', Audio: '../Olamide-Rock.mp3' },
{ id: '98', kind: 'track', title: 'Omah Lay - Free My Mind', Audio: '../Omah_Lay_-_Free_My_Mind - Copy.mp3' },
{ id: '99', kind: 'track', title: 'Omah Lay - Free My Mind', Audio: '../Omah_Lay_-_Free_My_Mind.mp3' },
{ id: '100', kind: 'track', title: 'Omah Lay - Soso', Audio: '../Omah_Lay_-_Soso.mp3' },
{ id: '101', kind: 'track', title: 'Omah Lay - Godly', Audio: '../Omah-Lay-Godly-(TrendyBeatz.com).mp3' },
{ id: '102', kind: 'track', title: 'Otega - Shayo', Audio: '../Otega-Shayo-(TrendyBeatz.com).mp3' },
{ id: '103', kind: 'track', title: 'Pheelz Ft Davido - Electricity', Audio: '../Pheelz-Ft-Davido-Electricity-(TrendyBeatz.com).mp3' },
{ id: '104', kind: 'track', title: 'Poco Lee Ft Hotkid - Otilo (Izz Gone)', Audio: '../Poco_Lee_Ft_Hotkid_-_Otilo_Izz_Gone_.mp3' },
{ id: '105', kind: 'track', title: 'Poco Lee x Portable x Olamide - Zazoo Zehh', Audio: '../Poco_Lee_x_Portable_x_Olamide_-_Zazoo_Zehh.mp3' },
{ id: '106', kind: 'track', title: 'Reekado Banks - Ozumba Mbadiwe', Audio: '../Reekado-Banks-Ozumba-Mbadiwe-(TrendyBeatz.com).mp3' },
{ id: '107', kind: 'track', title: 'Rema - Alien', Audio: '../Rema_-_Alien.mp3' },
{ id: '108', kind: 'track', title: 'Rema - Holiday', Audio: '../Rema_-_Holiday_Audio_.mp3' },
{ id: '109', kind: 'track', title: 'Rema - Bounce', Audio: '../Rema-Bounce-Booty-Bounce-(TrendyBeatz.com).mp3' },
{ id: '110', kind: 'track', title: 'Rema - Calm Down', Audio: '../Rema-Calm-Down.mp3' },
{ id: '111', kind: 'track', title: 'Rema - Charm', Audio: '../Rema-Charm-New-Song-(TrendyBeatz.com).mp3' },
{ id: '112', kind: 'track', title: 'Rema - Dumebi', Audio: '../Rema-Dumebi-[TrendyBeatz.com].mp3' },
{ id: '113', kind: 'track', title: 'Rema Ft Selena Gomez - Calm Down Remix', Audio: '../Rema-Ft-Selena-Gomez-Calm-Down-Remix-New-Song-(TrendyBeatz.com).mp3' },
{ id: '114', kind: 'track', title: 'Rexxie Ft Skiibii & Naira Marley - Abracadabra', Audio: '../Rexxie-Ft-Skiibii-and-Naira-Marley-Abracadabra-(TrendyBeatz.com).mp3' },
{ id: '115', kind: 'track', title: 'Ruger - Asiwaju', Audio: '../Ruger_-_Asiwaju_Video_.mp3' },
{ id: '116', kind: 'track', title: 'Ruger - Bun Bun', Audio: '../Ruger_-_Bun_Bun.mp3' },
{ id: '117', kind: 'track', title: 'Ruger - Dior', Audio: '../Ruger_-_Dior.mp3' },
{ id: '118', kind: 'track', title: 'Ruger - Bounce', Audio: '../Ruger-Bounce-(TrendyBeatz.com).mp3' },
{ id: '119', kind: 'track', title: 'Scroll Through the Sky', Audio: '../Scroll Through the Sky.mp3' },
{ id: '120', kind: 'track', title: 'Black Sherif - Second Sermon Remix Ft Burna Boy', Audio: '../Second-Sermon-Remix-ft.-Burna-Boy.mp3' },
{ id: '121', kind: 'track', title: 'Seyi Vibez - Chance (Na Ham)', Audio: '../Seyi_Vibez_-_Chance_Na_Ham_.mp3' },
{ id: '122', kind: 'track', title: 'Seyi Vibez - Kunfaya Kun (Be And It Is)', Audio: '../Seyi_Vibez_-_Kunfaya_Kun_Be_And_It_Is_.mp3' },
{ id: '123', kind: 'track', title: 'Seyi Vibez - Hat Trick', Audio: '../Seyi-Vibez---Hat-trick.mp3' },
{ id: '124', kind: 'track', title: 'Seyi Vibez - Bullion Van', Audio: '../Seyi-Vibez-Bullion-Van-(TrendyBeatz.com).mp3' },
{ id: '125', kind: 'track', title: 'Seyi Vibez - Para Boi', Audio: '../Seyi-Vibez-Para-Boi-(TrendyBeatz.com).mp3' },
{ id: '126', kind: 'track', title: 'Shaggy - Boombastic', Audio: '../Shaggy_-_Boombastic_[NaijaGreen.Com]_.mp3' },
{ id: '127', kind: 'track', title: 'Simi Ft Joeboy - So Bad', Audio: '../Simi_ft_Joeboy_-_So_Bad.mp3' },
{ id: '128', kind: 'track', title: 'Sisqó Ft Beanie Sigel - Unleash The Dragon', Audio: '../Sisq_ft_Beanie_Siegel_-_Unleash_The_Dragon_Qoret.com.mp3' },
{ id: '129', kind: 'track', title: 'Skiibii Ft Davido - Baddest Boy Remix', Audio: '../Skiibi_Ft_Davido_Baddest_Boy_Remix_9jaflaver.com_.mp3' },
{ id: '130', kind: 'track', title: 'Skiibii Ft Davido - Baddest Boy Remix', Audio: '../Skiibii_ft_Davido_-_Baddest_Boy_Remix_.mp3' },
{ id: '131', kind: 'track', title: 'Sleazy Stereo - SpongeBob SquarePants Remix', Audio: '../Sleazy_Stereo_-_Spongebob_Squarepants_Remix_.mp3' },
{ id: '132', kind: 'track', title: 'Take Me Back', Audio: '../Take_Me_Back.mp3' },
{ id: '133', kind: 'track', title: 'The Notorious B.I.G. - Notorious B.I.G.', Audio: '../The-Notorious-B.I.G.-Notorious-B.I.G.-via-Naijafinix.com-Copy.mp3' },
{ id: '134', kind: 'track', title: 'Timaya - Sweet Us', Audio: '../Timaya_-_SWEET_US.mp3' },
{ id: '135', kind: 'track', title: 'Tiwa Savage Ft Asake - Loaded', Audio: '../Tiwa_Savage_ft_Asake_-_Loaded.mp3' },
{ id: '136', kind: 'track', title: "Tiwa Savage Ft Brandy - Somebody's Son", Audio: '../Tiwa_Savage_Ft_Brandy_-_Somebody_s_Son.mp3' },
{ id: '137', kind: 'track', title: 'Tiwa Savage Ft Ayra Starr & Young Jonn - Stamina', Audio: '../Tiwa-Savage-Ft-Ayra-Starr-and-Young-Jonn-Stamina-(TrendyBeatz.com).mp3' },
{ id: '138', kind: 'track', title: 'Tiwa Savage Ft Spyro - Who Is Your Guy Remix', Audio: '../Tiwa-Savage-Ft-Spyro-Who-Is-Your-Guy-Remix-(TrendyBeatz.com).mp3' },
{ id: '139', kind: 'track', title: 'Victony Ft Omah Lay - Soweto Remix', Audio: '../Victony_Ft_Omah_Lay_-_Soweto_Remix_.mp3' },
{ id: '140', kind: 'track', title: 'Victor AD - Billz', Audio: '../Victor_AD_-_Billz.mp3' },
{ id: '141', kind: 'track', title: 'Voltage Of Hype Ft DJ Dabila - Amapiano Breakfast', Audio: '../Voltage-Of-Hype-Ft-DJ-Dabila-Amapiano-Breakfast-(TrendyBeatz.com).mp3' },
{ id: '142', kind: 'track', title: 'Young Jonn Ft Olamide - Currency', Audio: '../Young-Jonn-Ft-Olamide-Currency-New-Song-(TrendyBeatz.com).mp3' },
{ id: '143', kind: 'track', title: 'Young Jonn - Xtra Cool', Audio: '../Young-Jonn-Xtra-Cool-(TrendyBeatz.com).mp3' },
{ id: '144', kind: 'track', title: 'Zinoleesky - Kilofeshe', Audio: '../Zinoleesky_-_Kilofeshe.mp3' },
{ id: '145', kind: 'track', title: 'Zinoleesky - Many Things', Audio: '../Zinoleesky_-_Many_Things.mp3' },
{ id: '146', kind: 'track', title: 'Zinoleesky Ft Adekunle Gold - Party No Dey Stop', Audio: '../Zinoleesky-Ft-Adekunle-Gold-Party-No-Dey-Stop-(TrendyBeatz.com).mp3' },
{ id: '147', kind: 'track', title: 'Zlatan Ft Asake & Peruzzi - Mr Money Remix', Audio: '../Zlatan-Ft-Asake-and-Peruzzi-Mr-Money-Remix-(TrendyBeatz.com).mp3' },
  ];

  const escapeHtml = (str) => String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','<')
    .replaceAll('>','>')
    .replaceAll('"','"')
    .replaceAll("'",'&#039;');

  const render = (items, query) => {
    const q = (query || '').trim();
    if (!q) { resultsEl.innerHTML=''; return; }

    if (!items.length) {
      resultsEl.innerHTML = `<div class="search-empty">No music found for “${escapeHtml(q)}”.</div>`;
      return;
    }

    resultsEl.innerHTML = `
      <div class="search-summary">Found ${items.length} result${items.length===1?'':'s'} for “${escapeHtml(q)}”.</div>
      <div class="search-grid">
        ${items.map(m => `
          <div class="search-result" data-item-id="${escapeHtml(m.id)}" data-item-kind="${escapeHtml(m.kind)}" role="group">
            <div class="search-result-title">${escapeHtml(m.title)}</div>
            <div class="search-result-actions">
              <button class="action-play" type="button" data-action="play">Play</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    resultsEl.querySelectorAll('.search-result').forEach(card => {
      const id = card.dataset.itemId;
      const kind = card.dataset.itemKind;
const match = dataset.find(x => x.id === id);
      const title = match?.title || 'Track';
      const file = (match?.Audio || '').replace(/^\.\.\/?/, '');

      const playBtn = card.querySelector('[data-action="play"]');

      playBtn?.addEventListener('click', () => {
        // Pass the exact mp3 filename so Play.html can stream it reliably.
        // `file` here is a real filename like "Asake_-_Lonely_At_The_Top.mp3".
        window.location.href = `./Play.html?id=${encodeURIComponent(id)}&title=${encodeURIComponent(title)}&file=${encodeURIComponent(file)}&kind=${encodeURIComponent(kind)}`;
      });

      downloadBtn?.addEventListener('click', () => {
        window.location.href = `./Download.html?type=music&name=${encodeURIComponent(title)}`;
      });
    });
  };

  const runSearch = () => {
    const q = (input.value || '').trim().toLowerCase();
    if (!q) return render([], q);
    const matches = dataset.filter(m => m.title.toLowerCase().includes(q));
    render(matches, q);
  };

  input.addEventListener('input', runSearch);
  form?.addEventListener('submit', (e) => { e.preventDefault(); runSearch(); });
});

