const disabledTechs = {"Aztecs":[18,19,30,31,38,41,42,64,62,56,57,78,82,10,11,12,13,14,15,16,17,28,29,27,2,20,21,35,36,75,68,69,72],"Bengalis":[30,7,49,43,63,57,82,83,12,13,14,15,16,17,28,29,27,4,21,33,34,36,72],"Berbers":[31,50,55,64,56,57,78,83,15,24,2,4,20,21,33,34],"Bohemians":[18,30,31,42,60,82,12,15,16,17,28,29,4,20,21,33,34,72,67],"Britons":[18,30,31,47,48,49,60,63,57,59,12,15,16,17,27,4,20,21,33,34,36,69],"Bulgarians":[48,50,53,55,41,64,62,57,59,82,83,15,16,17,24,23,27,1,4,20,21,36,69,72,67,81],"Burgundians":[18,30,31,7,49,52,41,58,16,17,29,24,4,20,21,33,34,35,72],"Burmese":[30,49,41,40,63,57,82,83,15,16,17,24,27,4,21,33,34,72,67],"Byzantines":[18,31,44,56,58,59,83,4,20,21,33,35],"Celts":[18,30,31,3,47,48,50,51,52,41,42,46,60,64,56,57,16,17,24,27,4,20,21,36,69,67],"Chinese":[31,7,47,49,60,62,58,59,82,12,15,27,4,20,21,33,36,69,67],"Cumans":[19,7,47,50,51,52,46,63,56,57,58,59,77,78,17,24,27,4,20,35,36,68,69,72,80,81],"Dravidians":[18,19,31,47,49,54,51,42,60,61,63,56,58,59,83,12,13,14,15,16,17,28,29,4,21,34,36],"Ethiopians":[18,31,47,50,42,60,57,59,82,15,27,1,4,20,21,69,72,67],"Franks":[18,30,31,47,48,41,46,63,64,62,57,59,78,83,12,16,17,24,4,20,21,33,34,69],"Goths":[30,31,7,null,47,48,49,50,42,43,61,57,58,59,77,78,82,15,16,17,24,4,20,21,33,34,69,80,81],"Gurjaras":[31,3,50,53,41,44,64,62,57,58,13,14,15,28,29,24,1,2,5,4,20,21,33,34,69,67],"Hindustanis":[31,48,49,43,60,56,57,59,78,83,13,14,15,24,4,20,21,33,34,35,72,67],"Huns":[7,47,50,52,41,43,60,63,56,57,58,59,77,78,82,16,17,24,27,1,4,20,21,32,33,35,36,68,69,67,81],"Incas":[18,19,31,48,54,38,42,64,56,57,10,11,12,13,14,15,16,17,28,29,27,20,21,33,36,68,69,72],"Italians":[31,49,61,58,83,15,16,17,29,2,4,20,21,33,34,35,72],"Japanese":[49,42,60,63,62,56,57,82,83,12,15,16,17,4,20,21,33,34,36,72],"Khmer":[30,3,7,48,49,50,43,64,62,57,59,15,16,17,1,4,21,33,36,72],"Koreans":[18,31,47,48,49,51,42,44,60,82,83,15,16,17,4,20,21,34,35,70,71,72],"Lithuanians":[31,7,43,44,61,58,83,12,16,17,24,4,20,21,33,34,35,72],"Magyars":[3,47,48,53,43,63,62,56,57,78,16,17,27,4,20,21,33,34,36,69,72,81],"Malay":[18,31,54,52,38,42,64,56,59,82,12,15,16,17,29,27,1,4,21,33,34,72,81],"Malians":[31,51,44,46,64,57,58,12,15,2,4,20,21,34,35,75,69],"Mayans":[18,19,31,7,47,51,38,42,61,57,58,10,11,12,13,14,15,16,17,28,29,27,1,20,21,33,36,68,69],"Mongols":[7,47,50,55,51,52,41,42,60,64,62,56,57,59,78,15,27,2,4,20,36,69],"Persians":[47,48,49,55,51,46,57,58,59,78,24,1,4,20,21,9,33,81],"Poles":[31,48,49,51,41,42,61,64,56,12,15,16,17,27,2,4,20,21,33,35,69,72],"Portuguese":[31,3,51,61,82,12,15,16,17,29,4,20,21,33,34,35,67],"Saracens":[60,63,62,56,57,83,14,15,2,4,20,21,35,67],"Sicilians":[30,31,47,48,49,50,52,41,64,56,57,77,78,12,15,16,17,29,27,4,20,21,36,69,81],"Slavs":[30,31,49,46,63,62,56,57,59,78,15,16,17,24,27,4,20,21,36,69,72],"Spanish":[31,60,61,58,59,16,17,24,23,4,20,21,33,35],"Tatars":[7,47,49,53,55,52,39,43,63,64,56,78,82,15,24,1,4,20,33,36,72],"Teutons":[19,30,31,46,61,56,11,12,16,17,29,24,4,20,21,34,69],"Turks":[50,51,60,63,58,15,24,26,2,5,4,20,21,32,33,67],"Vietnamese":[31,47,49,54,44,61,56,12,15,16,17,27,4,21,33,34,35,67],"Vikings":[18,19,30,31,47,55,51,52,42,63,62,57,78,12,15,16,17,29,27,2,4,20,21,33,36,65,66,67]}