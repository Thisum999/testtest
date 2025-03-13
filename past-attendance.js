const API_URL = 'http://localhost:3000/api';

// Student data
const students = {
    "10A": [
       { register: "01", admission: "6663", name: "D.W. Minindu Pabasara", class: "10-A" },
   { register: "02", admission: "6677", name: "S. Senul Kowida", class: "10-A" },
   { register: "03", admission: "6687", name: "M.K. Isara", class: "10-A" },
   { register: "04", admission: "6694", name: "W.G. Helajith Dinujaya", class: "10-A" },
   { register: "05", admission: "6704", name: "M.G. Aken Yensith", class: "10-A" },
   { register: "06", admission: "6712", name: "N.G. Sadila Bonuka", class: "10-A" },
   { register: "07", admission: "6713", name: "D.A.N. Shanikla", class: "10-A" },
   { register: "08", admission: "6715", name: "M.H.C. Sandeepa", class: "10-A" },
   { register: "09", admission: "6721", name: "B.H. Sethika Dinsara", class: "10-A" },
   { register: "10", admission: "6740", name: "O. Thiyon Helika", class: "10-A" },
   { register: "11", admission: "6744", name: "B. Binuka Chameesha", class: "10-A" },
   { register: "12", admission: "6747", name: "K.B.O.T. Sankalana", class: "10-A" },
   { register: "13", admission: "6748", name: "W. Biman Basilu", class: "10-A" },
   { register: "14", admission: "6751", name: "D.H.K.A. Prasanjana", class: "10-A" },
   { register: "15", admission: "6752", name: "H.G. Chamindu Randika", class: "10-A" },
   { register: "16", admission: "6754", name: "P. Hirun Mindeepa", class: "10-A" },
   { register: "17", admission: "6768", name: "A.A.S. Dinsara", class: "10-A" },
   { register: "18", admission: "6771", name: "K.B.M. Nimsara", class: "10-A" },
   { register: "19", admission: "6783", name: "G.W. Theras de Silva", class: "10-A" },
   { register: "20", admission: "6791", name: "G.W.S.H.D. Sahaspathi", class: "10-A" },
   { register: "21", admission: "6795", name: "A.G.S. Nisayuru", class: "10-A" },
   { register: "22", admission: "6801", name: "D. Lithum Ambepitiya", class: "10-A" },
   { register: "23", admission: "6811", name: "K.K.I. Nemsitha", class: "10-A" },
   { register: "24", admission: "6815", name: "K.K.G.M. Maheesha", class: "10-A" },
   { register: "25", admission: "6817", name: "Y. Thinon Peramunage", class: "10-A" },
   { register: "26", admission: "6820", name: "D.A. Lakdilu Hansitha", class: "10-A" },
   { register: "27", admission: "6827", name: "H. Sadesh Nimsara Thilakarathna", class: "10-A" },
   { register: "28", admission: "6829", name: "H. Ushan Madhushanka de Soysa", class: "10-A" },
   { register: "29", admission: "6833", name: "A. Nethsara Chithhan", class: "10-A" },
   { register: "30", admission: "6842", name: "T.A. Vidasun Nethsara", class: "10-A" },
   { register: "31", admission: "6843", name: "P.H.U. Hasara", class: "10-A" },
   { register: "32", admission: "6851", name: "K.P.T. Dinsath", class: "10-A" },
   { register: "33", admission: "6854", name: "M.S. Sachithya", class: "10-A" },
   { register: "34", admission: "8954", name: "V.A.A.P. Bihara", class: "10-A" },
   { register: "35", admission: "8955", name: "M.H.I. Dewdunu", class: "10-A" },
   { register: "36", admission: "8975", name: "D. Maleesha Nethsara", class: "10-A" },
   { register: "37", admission: "8988", name: "W.M.S.S. Dahampath", class: "10-A" },
   { register: "38", admission: "8990", name: "G.H.A. Akash Denuwan", class: "10-A" },
   { register: "39", admission: "8995", name: "P.D.G.D. Rashmika", class: "10-A" },
   { register: "40", admission: "8996", name: "D.D. Gagul Randima", class: "10-A" },
   { register: "41", admission: "9005", name: "L.A.K. Dilshan", class: "10-A" },
   { register: "42", admission: "9009", name: "E.D.S. Moshitha", class: "10-A" },
   { register: "43", admission: "9011", name: "H.T.T. Nethsara", class: "10-A" },
   { register: "44", admission: "9018", name: "H.A. Manaram Thathsara", class: "10-A" },
   { register: "45", admission: "9238", name: "W.A.K.N. Kawishka Nimsara", class: "10-A" },
   { register: "46", admission: "9259", name: "M.D.H.V. Priyadarshana", class: "10-A" },
   { register: "47", admission: "9327", name: "J. Ruwindu Hansana", class: "10-A" },
   { register: "48", admission: "9500", name: "M.H. Kesara Buddhimal", class: "10-A" },
   { register: "49", admission: "10322", name: "W.H. Udesh Amasha", class: "10-A" }],
   "10B": [
       { register: "01", admission: "6664", name: "R.B. Gunasekara", class: "10-B" },
{ register: "02", admission: "6680", name: "K.A. Navidu Siwhas", class: "10-B" },
{ register: "03", admission: "6686", name: "K.M. Kalana Sandeepa", class: "10-B" },
{ register: "04", admission: "6690", name: "U.A. Hasod Himakara", class: "10-B" },
{ register: "05", admission: "6697", name: "W.D. Adeepa Eshan", class: "10-B" },
{ register: "06", admission: "6699", name: "A.J. Abhiman Jayasinghe", class: "10-B" },
{ register: "07", admission: "6714", name: "D. Charuka Hettiwatta", class: "10-B" },
{ register: "08", admission: "6729", name: "K.G. Sajana Kithmina", class: "10-B" },
{ register: "09", admission: "6732", name: "M.M. Danindu Dilhara", class: "10-B" },
{ register: "10", admission: "6738", name: "Kenul Januga Udugampola", class: "10-B" },
{ register: "11", admission: "6739", name: "G.K. Dithira Yugeeth", class: "10-B" },
{ register: "12", admission: "6742", name: "Avishka Ganesh Udupilage", class: "10-B" },
{ register: "13", admission: "6753", name: "W.G. Yalindu Nethsara", class: "10-B" },
{ register: "14", admission: "6757", name: "M. Wathsala Hewagama", class: "10-B" },
{ register: "15", admission: "6758", name: "S.A. Sanjaya Alahakoon", class: "10-B" },
{ register: "16", admission: "6767", name: "A. Menula Sandil", class: "10-B" },
{ register: "17", admission: "6779", name: "Y.R. Samaraweeraarachchi", class: "10-B" },
{ register: "18", admission: "6792", name: "D.L.B. Thenuja Thusaraka", class: "10-B" },
{ register: "19", admission: "6794", name: "L.N.M. Mendaka", class: "10-B" },
{ register: "20", admission: "6799", name: "H.G. Rithira Hansindu", class: "10-B" },
{ register: "21", admission: "6804", name: "H. Amod Indupama", class: "10-B" },
{ register: "22", admission: "6808", name: "A.K. Ashen Shavidu", class: "10-B" },
{ register: "23", admission: "6823", name: "B.J.A. Janith Chathumina", class: "10-B" },
{ register: "24", admission: "6825", name: "N.V. Rakitha Vidarshana", class: "10-B" },
{ register: "25", admission: "6828", name: "G.K. Apsara Sahansith", class: "10-B" },
{ register: "26", admission: "6831", name: "K. Minindu Desadula Kularathna", class: "10-B" },
{ register: "27", admission: "6844", name: "K.H. Rasheen Oshadha", class: "10-B" },
{ register: "28", admission: "6845", name: "P.H. Vimukthi Denuwan", class: "10-B" },
{ register: "29", admission: "6846", name: "W.S. Thisun Dilsara", class: "10-B" },
{ register: "30", admission: "6921", name: "L.G. Okindu Vathmira", class: "10-B" },
{ register: "31", admission: "8420", name: "W.D. Gangul Kethaka", class: "10-B" },
{ register: "32", admission: "8972", name: "K.K. Nethindu Thaminda", class: "10-B" },
{ register: "33", admission: "8974", name: "B.K.M. Mahima Kushan", class: "10-B" },
{ register: "34", admission: "8981", name: "N.A. Chanuga Hansana Wijenayake", class: "10-B" },
{ register: "35", admission: "8984", name: "H.P. Chanuka Senewirathna", class: "10-B" },
{ register: "36", admission: "8989", name: "M.D. Ranindu Pramod", class: "10-B" },
{ register: "37", admission: "8993", name: "D.M. Thisum Jalitha", class: "10-B" },
{ register: "38", admission: "8994", name: "D.G. Nadith Nethsara", class: "10-B" },
{ register: "39", admission: "8997", name: "W.D. Madhuka Shamal", class: "10-B" },
{ register: "40", admission: "9004", name: "I.A. Chamidu Deshan", class: "10-B" },
{ register: "41", admission: "9006", name: "R.H.A. Rusira Hansitha", class: "10-B" },
{ register: "42", admission: "9019", name: "W. Janith Nimsara", class: "10-B" },
{ register: "43", admission: "9020", name: "Adil Insanda Withanawasam", class: "10-B" },
{ register: "44", admission: "9240", name: "G.K. Thasith Thanuwara", class: "10-B" },
{ register: "45", admission: "9241", name: "Yashod Lasal Lokuge", class: "10-B" },
{ register: "46", admission: "9246", name: "E.D. Loshitha Pabasara", class: "10-B" },
{ register: "47", admission: "9282", name: "M.G. Sanuja Sithumjith", class: "10-B" },
{ register: "48", admission: "9750", name: "Nuraj Dasnula Wanniarachchi", class: "10-B" },
{ register: "49", admission: "10523", name: "W. Binuka Rachintha", class: "10-B" },
{ register: "50", admission: "11115", name: "R.W. Sayura Dinethma", class: "10-B" }
   ],
   "10C": [
       { register: "01", admission: "6661", name: "T.K. Thimath Methdinu", class: "10-C" },
{ register: "02", admission: "6667", name: "P.L. Sandaru Heshan", class: "10-C" },
{ register: "03", admission: "6670", name: "Sandira Arabawela", class: "10-C" },
{ register: "04", admission: "6683", name: "C.S. Liyanage", class: "10-C" },
{ register: "05", admission: "6693", name: "A. Kesara Sumanasekara", class: "10-C" },
{ register: "06", admission: "6695", name: "L.L. Dharana Hansaja", class: "10-C" },
{ register: "07", admission: "6698", name: "H.R.S. Thehan", class: "10-C" },
{ register: "08", admission: "6703", name: "I. Himal Weerathunge", class: "10-C" },
{ register: "09", admission: "6709", name: "Saviru Thuduwage", class: "10-C" },
{ register: "10", admission: "6731", name: "S.A.O. Senith Pinsara", class: "10-C" },
{ register: "11", admission: "6737", name: "U.P.G. Maleesha Mandil", class: "10-C" },
{ register: "12", admission: "6745", name: "D.D.D.A. Nethsara Deshapriya", class: "10-C" },
{ register: "13", admission: "6756", name: "P. Madushan", class: "10-C" },
{ register: "14", admission: "6760", name: "S. Liyon Petnot", class: "10-C" },
{ register: "15", admission: "6780", name: "Binara W. Wijesekara", class: "10-C" },
{ register: "16", admission: "6803", name: "R.T. Theekshana", class: "10-C" },
{ register: "17", admission: "6805", name: "S.Y. Saumya Sankalapa", class: "10-C" },
{ register: "18", admission: "6807", name: "A.G. Thimira Uthpala", class: "10-C" },
{ register: "19", admission: "6808", name: "N.P.M. Piyusha", class: "10-C" },
{ register: "20", admission: "6810", name: "D.R. Panditha", class: "10-C" },
{ register: "21", admission: "6816", name: "W.W.K. Githmal", class: "10-C" },
{ register: "22", admission: "6818", name: "Viduravi Nadeeja", class: "10-C" },
{ register: "23", admission: "6832", name: "K.P.P. Pramod", class: "10-C" },
{ register: "24", admission: "6835", name: "H.A. Rashintha", class: "10-C" },
{ register: "25", admission: "6840", name: "H.W. Chanuga Nethvidu", class: "10-C" },
{ register: "26", admission: "6847", name: "G.H.H. Rukshan", class: "10-C" },
{ register: "27", admission: "6848", name: "K.H.S. Henula", class: "10-C" },
{ register: "28", admission: "6855", name: "S.W. Binuk Thinula Nupura", class: "10-C" },
{ register: "29", admission: "8282", name: "K.D.A. Anuhas", class: "10-C" },
{ register: "30", admission: "8421", name: "M. Suwahas Pathum", class: "10-C" },
{ register: "31", admission: "8968", name: "J.K.J. Basitha", class: "10-C" },
{ register: "32", admission: "8970", name: "K.W. Seneth Yanula", class: "10-C" },
{ register: "33", admission: "8977", name: "K.N. Pahasara", class: "10-C" },
{ register: "34", admission: "8982", name: "H.G. T. Chanketh", class: "10-C" },
{ register: "35", admission: "8986", name: "Sadaru Paranavithana", class: "10-C" },
{ register: "36", admission: "8995", name: "A.G.G. Nimdinu", class: "10-C" },
{ register: "37", admission: "9000", name: "G.V.D. Senumitha", class: "10-C" },
{ register: "38", admission: "9003", name: "P.A.S.V.M. Abhilash", class: "10-C" },
{ register: "39", admission: "9008", name: "K.G.G. Induwara", class: "10-C" },
{ register: "40", admission: "9010", name: "G.P. Sandesh Nethsara", class: "10-C" },
{ register: "41", admission: "9016", name: "K.G. Neththaru Sandiya", class: "10-C" },
{ register: "42", admission: "9239", name: "S.R. Akurugoda", class: "10-C" },
{ register: "43", admission: "9243", name: "Y.L. Senal Newanjana", class: "10-C" },
{ register: "44", admission: "9245", name: "N.W.A.L. Sathviru", class: "10-C" },
{ register: "45", admission: "9248", name: "Sathdisa De Silva", class: "10-C" },
{ register: "46", admission: "9501", name: "Hirun S.L. Jawardana", class: "10-C" },
{ register: "47", admission: "9995", name: "G.P.A. Sandeepa", class: "10-C" }
   ],
   "10D": [
       { register: "01", admission: "6662", name: "Romindu Tharaka Munasinghe", class: "10-D" },
{ register: "02", admission: "6665", name: "K.L.W. Senura Dulmika", class: "10-D" },
{ register: "03", admission: "6671", name: "K.A. Abiru Dewsara", class: "10-D" },
{ register: "04", admission: "6676", name: "M.A. Tharusha Kavishan", class: "10-D" },
{ register: "05", admission: "6681", name: "Sasindu Sehansa Ranasinghe", class: "10-D" },
{ register: "06", admission: "6684", name: "E.A. Dasiru Boditha", class: "10-D" },
{ register: "07", admission: "6688", name: "R.M.T. Senuth Rajapaksha", class: "10-D" },
{ register: "08", admission: "6689", name: "A.D.S. Aksen Sandayuru", class: "10-D" },
{ register: "09", admission: "6707", name: "N.A. Kanishka Vishwadinu", class: "10-D" },
{ register: "10", admission: "6717", name: "P.L. Sethum Sethvin", class: "10-D" },
{ register: "11", admission: "6718", name: "A.B. Sandika Sathsilu", class: "10-D" },
{ register: "12", admission: "6719", name: "D. Videw Mindula", class: "10-D" },
{ register: "13", admission: "6720", name: "A.K. Methuka Tharuk", class: "10-D" },
{ register: "14", admission: "6730", name: "A.P. Janindu Nimsara", class: "10-D" },
{ register: "15", admission: "6735", name: "U.D. Yashod Sandesh", class: "10-D" },
{ register: "16", admission: "6741", name: "D.S.D. Gunasekara", class: "10-D" },
{ register: "17", admission: "6759", name: "M.H. Eshan Raveen", class: "10-D" },
{ register: "18", admission: "6761", name: "H.P. Thinuka Hirun", class: "10-D" },
{ register: "19", admission: "6762", name: "Amath Hansaja Pathirana", class: "10-D" },
{ register: "20", admission: "6765", name: "K.L. Geeneth Sasvindu", class: "10-D" },
{ register: "21", admission: "6772", name: "K.L.D. Senuth Dinsara", class: "10-D" },
{ register: "22", admission: "6773", name: "B.G. Nethum Nethsara", class: "10-D" },
{ register: "23", admission: "6778", name: "U.S. Sathika Himansana", class: "10-D" },
{ register: "24", admission: "6782", name: "U.G. Chathil Kariyawasam", class: "10-D" },
{ register: "25", admission: "6786", name: "I. Manitha Rajapakshe", class: "10-D" },
{ register: "26", admission: "6788", name: "D.S.H. Imal Tharushika", class: "10-D" },
{ register: "27", admission: "6790", name: "D. Thejitha Gamage", class: "10-D" },
{ register: "28", admission: "6796", name: "Adil Rankindu Pasqual", class: "10-D" },
{ register: "29", admission: "6809", name: "R.H. Sithum Dulmira", class: "10-D" },
{ register: "30", admission: "6821", name: "D.B. Minuka Hiranya", class: "10-D" },
{ register: "31", admission: "6822", name: "A.H. Senura Jayashan", class: "10-D" },
{ register: "32", admission: "6824", name: "N.H.W.N. Sashin Jayathunge", class: "10-D" },
{ register: "33", admission: "6826", name: "A.V. Umayanga Malinda", class: "10-D" },
{ register: "34", admission: "6836", name: "B.G. Lakindu Nethsara", class: "10-D" },
{ register: "35", admission: "6838", name: "Pamod De Soyza", class: "10-D" },
{ register: "36", admission: "6850", name: "D.K.S. Sandaruwan De Silva", class: "10-D" },
{ register: "37", admission: "6852", name: "K.A. Chandupa Abhiman", class: "10-D" },
{ register: "38", admission: "6862", name: "A.G. Achintha Dewmina", class: "10-D" },
{ register: "39", admission: "6864", name: "H.K. Shrayan Patalie", class: "10-D" },
{ register: "40", admission: "6924", name: "N.P.T. Nihindu Channula", class: "10-D" },
{ register: "41", admission: "7282", name: "T.G. Vinuja Nethmin", class: "10-D" },
{ register: "42", admission: "8959", name: "H.M. Chanthuka Muthumala", class: "10-D" },
{ register: "43", admission: "8971", name: "L.G. Thasmitha Dinethmin", class: "10-D" },
{ register: "44", admission: "8978", name: "H.A. Vinuk Senitha", class: "10-D" },
{ register: "45", admission: "8999", name: "B.G. Sinura Sasvidu", class: "10-D" },
{ register: "46", admission: "9242", name: "K.G. Nethula Mandil", class: "10-D" },
{ register: "47", admission: "9244", name: "J.L. Thujan Venuja", class: "10-D" },
{ register: "48", admission: "9499", name: "Desindu Sri Jayanula", class: "10-D" },
{ register: "49", admission: "9711", name: "M.H. Induwara Dineth", class: "10-D" },
{ register: "50", admission: "9994", name: "M. Kavindu Hansaka", class: "10-D" },
{ register: "51", admission: "10306", name: "G. Vonal Isira Sampath", class: "10-D" }
   ],
   "10E": [
       { register: "01", admission: "6659", name: "Ehas Damketh", class: "10-E" },
{ register: "02", admission: "6660", name: "Phan Gamage", class: "10-E" },
{ register: "03", admission: "6666", name: "Sanmitha Suhaswin", class: "10-E" },
{ register: "04", admission: "6673", name: "V.G.Y. Damsara", class: "10-E" },
{ register: "05", admission: "6678", name: "H.G.A.S. Dewmith", class: "10-E" },
{ register: "06", admission: "6691", name: "Sanvidu Vonal", class: "10-E" },
{ register: "07", admission: "6692", name: "A.S.K.W. Dhahanayaka", class: "10-E" },
{ register: "08", admission: "6696", name: "S.Tinal Prabuda", class: "10-E" },
{ register: "09", admission: "6700", name: "G. Siluna Randivu De Zoysa", class: "10-E" },
{ register: "10", admission: "6701", name: "K.D. Thejana De Silva", class: "10-E" },
{ register: "11", admission: "6706", name: "U.P. Hirimuthugoda", class: "10-E" },
{ register: "12", admission: "6716", name: "U.L. Arshana Indoopa", class: "10-E" },
{ register: "13", admission: "6722", name: "K.A.S. Sasmin", class: "10-E" },
{ register: "14", admission: "6723", name: "D.S. Wickramanayaka", class: "10-E" },
{ register: "15", admission: "6741", name: "D.P. Jayasingha", class: "10-E" },
{ register: "16", admission: "6743", name: "Osanda Gayanthaka", class: "10-E" },
{ register: "17", admission: "6749", name: "S.K.S.D. Dewnuda", class: "10-E" },
{ register: "18", admission: "6750", name: "T.H. Attanayaka", class: "10-E" },
{ register: "19", admission: "6764", name: "D. Punchihewa", class: "10-E" },
{ register: "20", admission: "6769", name: "V.D. Gunawardhana", class: "10-E" },
{ register: "21", admission: "6770", name: "P.H. Senuka Chandunu De Silva", class: "10-E" },
{ register: "22", admission: "6776", name: "Nethma Nallaperuma", class: "10-E" },
{ register: "23", admission: "6775", name: "Senila Hansana Gunathilaka", class: "10-E" },
{ register: "24", admission: "6781", name: "Sithuka Methdina Surasinghe", class: "10-E" },
{ register: "25", admission: "6784", name: "Chanidu Shaluka", class: "10-E" },
{ register: "26", admission: "6789", name: "Y.N. Pathiranage", class: "10-E" },
{ register: "27", admission: "6793", name: "S.N. Vithanage", class: "10-E" },
{ register: "28", admission: "6797", name: "Yenuka Dulin", class: "10-E" },
{ register: "29", admission: "6800", name: "B.G.K.K. Galhena", class: "10-E" },
{ register: "30", admission: "6800", name: "Jonathan Suhas Karunanayake", class: "10-E" },
{ register: "31", admission: "6812", name: "Sethindu Damsas Wehalla", class: "10-E" },
{ register: "32", admission: "6849", name: "Nimsara Gimhan", class: "10-E" },
{ register: "33", admission: "6856", name: "M.H.G. Yasaru", class: "10-E" },
{ register: "34", admission: "6863", name: "H.K. Randesh Nuwaneth", class: "10-E" },
{ register: "35", admission: "6922", name: "Kaviru Thasmika Wagachchci", class: "10-E" },
{ register: "36", admission: "7824", name: "A.A. Videw Vinsara Abesinghe", class: "10-E" },
{ register: "37", admission: "7989", name: "Senuwara Dinudika", class: "10-E" },
{ register: "38", admission: "8914", name: "D.S.K. Wanniaarachchi", class: "10-E" },
{ register: "39", admission: "8973", name: "K.H.A. Akein Kulathunga", class: "10-E" },
{ register: "40", admission: "8976", name: "R.K.K.S. Nimsara", class: "10-E" },
{ register: "41", admission: "8985", name: "Sanula Nethmira", class: "10-E" },
{ register: "42", admission: "8987", name: "E.M. Suvin Sasvindu", class: "10-E" },
{ register: "43", admission: "9012", name: "M.M.C.D. Nimsilu", class: "10-E" },
{ register: "44", admission: "9237", name: "S.N. Panditha", class: "10-E" },
{ register: "45", admission: "9249", name: "Sanith Netharu Yuhansa", class: "10-E" },
{ register: "46", admission: "9256", name: "V.S. Gangabadage", class: "10-E" },
{ register: "47", admission: "9281", name: "O.K.D. S. Dinuwara", class: "10-E" },
{ register: "48", admission: "9503", name: "K.G.D.B. Jayasekara", class: "10-E" },
{ register: "49", admission: "10328", name: "K.P. Hansaka Pathmin", class: "10-E" },
{ register: "50", admission: "10718", name: "K.P. Dhasas Ranthusa", class: "10-E" }
   ],
   "10F": [
       { register: "01", admission: "6668", name: "N.D.N Sesitha", class: "10-F" },
{ register: "02", admission: "6669", name: "S.A. Kenod Hiruka", class: "10-F" },
{ register: "03", admission: "6672", name: "L. Methuka Manhiru", class: "10-F" },
{ register: "04", admission: "6674", name: "K.L.S. Matheesha", class: "10-F" },
{ register: "05", admission: "6675", name: "Panchala Anuhas", class: "10-F" },
{ register: "06", admission: "6677", name: "M.H. Didula Sasadara", class: "10-F" },
{ register: "07", admission: "6679", name: "A.H. Ashen Chathuranga", class: "10-F" },
{ register: "08", admission: "6682", name: "W.K. Nethil Sadika", class: "10-F" },
{ register: "09", admission: "6702", name: "B.H. Sadeesha Rashmika", class: "10-F" },
{ register: "10", admission: "6705", name: "L.M. Sadeesha Nethsara", class: "10-F" },
{ register: "11", admission: "6708", name: "L.V.D. Amod Nevinda", class: "10-F" },
{ register: "12", admission: "6710", name: "L.V.D. Chamod Rashmika", class: "10-F" },
{ register: "13", admission: "6714", name: "Omath Randinu Malalagama", class: "10-F" },
{ register: "14", admission: "6733", name: "W.W. Sadalu Yashintha", class: "10-F" },
{ register: "15", admission: "6734", name: "D.A.I. Yashan Kalhara", class: "10-F" },
{ register: "16", admission: "6736", name: "B. Rashmika Sankalana", class: "10-F" },
{ register: "17", admission: "6739", name: "D.G. Nomin Yuthmika", class: "10-F" },
{ register: "18", admission: "6741", name: "Tharuka Sandeepa", class: "10-F" },
{ register: "19", admission: "6746", name: "B.A. Uvindu Chirath Mahendra", class: "10-F" },
{ register: "20", admission: "6755", name: "A.G. Dulesh Sehanasa", class: "10-F" },
{ register: "21", admission: "6763", name: "K.G.D. Sewhas", class: "10-F" },
{ register: "22", admission: "6766", name: "K. Sadanu Lometh", class: "10-F" },
{ register: "23", admission: "6787", name: "T.W. Bisath Manumitha", class: "10-F" },
{ register: "24", admission: "6813", name: "M.D. Jeram Shamika", class: "10-F" },
{ register: "25", admission: "6820", name: "Kisandu Kalmira Jayawickrama", class: "10-F" },
{ register: "26", admission: "6830", name: "Risika Nethwiru", class: "10-F" },
{ register: "27", admission: "6831", name: "D.K. Suwahas Induwara", class: "10-F" },
{ register: "28", admission: "6834", name: "B.K.A. Sadaru Prabashwara", class: "10-F" },
{ register: "29", admission: "6853", name: "E. Pracheera Chethana Da Zoysa", class: "10-F" },
{ register: "30", admission: "6854", name: "N.K. Omith Damnuja", class: "10-F" },
{ register: "31", admission: "6857", name: "H.V.T. Yugeeth Damhiru", class: "10-F" },
{ register: "32", admission: "6858", name: "D.S. Gajanayaka", class: "10-F" },
{ register: "33", admission: "6919", name: "O.H.S. Udugampola", class: "10-F" },
{ register: "34", admission: "8267", name: "W.M. Soniru Sandes", class: "10-F" },
{ register: "35", admission: "8979", name: "E.A.M. Pansilua Silwa", class: "10-F" },
{ register: "36", admission: "8980", name: "K.D. Himasha Chamudith", class: "10-F" },
{ register: "37", admission: "8983", name: "K.K. Chamika Kavithra", class: "10-F" },
{ register: "38", admission: "8992", name: "H.K. A. Dewmika", class: "10-F" },
{ register: "39", admission: "9001", name: "W. Anuga Vihas", class: "10-F" },
{ register: "40", admission: "9002", name: "Rusiru Ranmina Wellala", class: "10-F" },
{ register: "41", admission: "9013", name: "G.H.P.A.W. Piyumal", class: "10-F" },
{ register: "42", admission: "9015", name: "V.L. Samarasekara", class: "10-F" },
{ register: "43", admission: "9017", name: "A.V. Kaushika Tharumina", class: "10-F" },
{ register: "44", admission: "9247", name: "N.Y. Yonal", class: "10-F" },
{ register: "45", admission: "9328", name: "M.H. Rusiru Vihanga", class: "10-F" },
{ register: "46", admission: "9498", name: "K.V. Malitha Madhushan", class: "10-F" },
{ register: "47", admission: "9707", name: "Randul de Zoysa", class: "10-F" } ]

};

// Load attendance records
async function loadPastAttendance() {
    const date = document.getElementById('attendanceDate').value;
    const className = document.getElementById('pastAttendanceClass').value;
    const spinner = document.querySelector('.loading-spinner');
    
    if (!date || !className) {
        document.getElementById('pastAttendanceLog').innerHTML = '<p class="text-center">Please select both date and class</p>';
        return;
    }

    try {
        // Get all students for the selected class
        const classStudents = students[className.replace('-', '')] || [];
        if (classStudents.length === 0) {
            document.getElementById('pastAttendanceLog').innerHTML = '<p class="text-center">No students found for this class</p>';
            return;
        }

        // Show loading state
        spinner.style.display = 'inline-block';
        document.getElementById('pastAttendanceLog').innerHTML = '';

        // Fetch attendance records for the selected date and class
        const response = await fetch(`${API_URL}/attendance?date=${date}&class=${className}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to load attendance');
        }

        const data = await response.json();
        const attendanceRecords = data.length > 0 ? data[0].records || [] : [];
        
        // Create a map of attendance records for easy lookup
        const attendanceMap = new Map();
        attendanceRecords.forEach(record => {
            attendanceMap.set(record.admissionNumber, record);
        });

        // Calculate attendance counts
        let presentCount = 0;
        const totalCount = classStudents.length;
        classStudents.forEach(student => {
            if (attendanceMap.has(student.admission)) {
                presentCount++;
            }
        });
        const absentCount = totalCount - presentCount;
        const presentPercentage = ((presentCount / totalCount) * 100).toFixed(1);
        
        const summary = document.createElement('div');
        summary.className = 'card mb-4';
        summary.innerHTML = `
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Attendance Summary for ${className} on ${new Date(date).toLocaleDateString()}</h5>
            </div>
            <div class="card-body">
                <div class="row text-center">
                    <div class="col-md-3">
                        <h4>${totalCount}</h4>
                        <p class="text-muted mb-0">Total Students</p>
                    </div>
                    <div class="col-md-3">
                        <h4 class="text-success">${presentCount}</h4>
                        <p class="text-muted mb-0">Present</p>
                    </div>
                    <div class="col-md-3">
                        <h4 class="text-danger">${absentCount}</h4>
                        <p class="text-muted mb-0">Absent</p>
                    </div>
                    <div class="col-md-3">
                        <h4>${presentPercentage}%</h4>
                        <p class="text-muted mb-0">Attendance Rate</p>
                    </div>
                </div>
            </div>
        `;

        // Create action buttons
        const actionButtons = document.createElement('div');
        actionButtons.className = 'mb-3';
        actionButtons.innerHTML = `
            <button class="btn btn-success me-2" onclick="downloadExcel()">
                <i class="fas fa-file-excel me-2"></i>Export to Excel
            </button>
            <button class="btn btn-info" onclick="downloadPDF()">
                <i class="fas fa-file-pdf me-2"></i>Download PDF
            </button>
        `;

        // Create table
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-responsive';
        tableWrapper.innerHTML = `
            <table id="attendanceTable" class="table table-striped table-hover">
                <thead class="table-primary">
                    <tr>
                        <th>Register No</th>
                        <th>Name</th>
                        <th>Admission No</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Method</th>
                    </tr>
                </thead>
                <tbody>
                    ${classStudents.map(student => {
                        const attendanceRecord = attendanceMap.get(student.admission);
                        const statusClass = attendanceRecord ? 'bg-success' : 'bg-danger';
                        const statusText = attendanceRecord ? 'Present' : 'Absent';
                        
                        return `
                            <tr>
                                <td>${student.register}</td>
                                <td>${student.name}</td>
                                <td>${student.admission}</td>
                                <td>
                                    <span class="badge ${statusClass}">${statusText}</span>
                                </td>
                                <td>${attendanceRecord ? attendanceRecord.time : '-'}</td>
                                <td>${attendanceRecord ? attendanceRecord.method : '-'}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;

        const container = document.getElementById('pastAttendanceLog');
        container.innerHTML = '';
        container.appendChild(summary);
        container.appendChild(actionButtons);
        container.appendChild(tableWrapper);

        // Initialize DataTable
        window.currentTable = $('#attendanceTable').DataTable({
            pageLength: 50,
            dom: '<"row"<"col-md-6"f><"col-md-6"l>>rtip',
            language: {
                search: "Search students:"
            }
        });

        // Store current data for export
        window.currentData = {
            students: classStudents,
            attendance: attendanceMap,
            class: className,
            date: date
        };

    } catch (error) {
        console.error('Error loading attendance:', error);
        document.getElementById('pastAttendanceLog').innerHTML = 
            '<div class="alert alert-danger">Failed to load attendance data</div>';
    } finally {
        spinner.style.display = 'none';
    }
}

// Function to download Excel file
function downloadExcel() {
    if (!window.currentData) return;
    
    const { students, attendance, class: className, date } = window.currentData;
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    
    // Add title and summary data
    let presentCount = 0;
    students.forEach(student => {
        if (attendance.get(student.admission)) {
            presentCount++;
        }
    });
    const totalCount = students.length;
    const absentCount = totalCount - presentCount;
    const presentPercentage = ((presentCount / totalCount) * 100).toFixed(1);

    // Create summary worksheet
    const summaryData = [
        ['Attendance Summary'],
        ['Class', className],
        ['Date', new Date(date).toLocaleDateString()],
        [''],
        ['Total Students', totalCount],
        ['Present', presentCount],
        ['Absent', absentCount],
        ['Attendance Rate', `${presentPercentage}%`]
    ];
    
    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
    
    // Style the summary sheet
    summaryWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }];
    summaryWs['!cols'] = [{ wch: 15 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');

    // Create attendance details worksheet
    const detailsData = [
        ['Register No', 'Name', 'Admission No', 'Status', 'Time', 'Method']
    ];

    students.forEach(student => {
        const record = attendance.get(student.admission);
        detailsData.push([
            student.register,
            student.name,
            student.admission,
            record ? 'Present' : 'Absent',
            record ? record.time : '-',
            record ? record.method : '-'
        ]);
    });

    const detailsWs = XLSX.utils.aoa_to_sheet(detailsData);
    
    // Set column widths for details sheet
    detailsWs['!cols'] = [
        { wch: 12 }, // Register No
        { wch: 30 }, // Name
        { wch: 15 }, // Admission No
        { wch: 10 }, // Status
        { wch: 15 }, // Time
        { wch: 15 }  // Method
    ];

    XLSX.utils.book_append_sheet(wb, detailsWs, 'Attendance Details');

    // Save the file
    XLSX.writeFile(wb, `attendance_${className}_${date}.xlsx`);
}

// Function to download PDF
function downloadPDF() {
    if (!window.currentData) return;

    const { students, attendance, class: className, date } = window.currentData;
    const { jsPDF } = window.jspdf;

    // Create PDF document
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text(`Attendance Report - ${className}`, 14, 15);
    doc.setFontSize(12);
    doc.text(`Date: ${new Date(date).toLocaleDateString()}`, 14, 25);

    // Calculate attendance summary
    let presentCount = 0;
    students.forEach(student => {
        if (attendance.get(student.admission)) {
            presentCount++;
        }
    });
    const totalCount = students.length;
    const absentCount = totalCount - presentCount;
    const presentPercentage = ((presentCount / totalCount) * 100).toFixed(1);

    // Add summary
    doc.text(`Total Students: ${totalCount}`, 14, 35);
    doc.text(`Present: ${presentCount}`, 14, 42);
    doc.text(`Absent: ${absentCount}`, 14, 49);
    doc.text(`Attendance Rate: ${presentPercentage}%`, 14, 56);

    // Prepare table data
    const tableData = students.map(student => {
        const record = attendance.get(student.admission);
        return [
            student.register,
            student.name,
            student.admission,
            record ? 'Present' : 'Absent',
            record ? record.time : '-',
            record ? record.method : '-'
        ];
    });

    // Add table
    doc.autoTable({
        head: [['Register No', 'Name', 'Admission No', 'Status', 'Time', 'Method']],
        body: tableData,
        startY: 65,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [51, 122, 183] },
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 40 },
            2: { cellWidth: 25 },
            3: { cellWidth: 20 },
            4: { cellWidth: 30 },
            5: { cellWidth: 30 }
        }
    });

    // Save the PDF
    doc.save(`attendance_${className}_${date}.pdf`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('attendanceDate').value = today;
    
    // Add event listeners
    document.getElementById('loadPastAttendance').addEventListener('click', loadPastAttendance);
});
