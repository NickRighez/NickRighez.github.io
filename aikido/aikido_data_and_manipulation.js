function tecnique(name,level)
{
	this.nome=name;
	this.cintura=level;
}
var tecniche = {
				fondamentali:[],
				taijutsu:[],
				bukiwaza:
					{
						ken:
						{
							Ken_suburi_nana_hon :[],
							ken_no_awase: []
						}
						jo:
						{
							Jo_suburi_nijuppon: [],//sottogruppi da sistemare
							jo_no_awase: []
						}
					}
};

//= new Object();
//tecniche.fondamentali = [];
tecniche.fondamentali.push(tecniche("Hanmi – Ai hanmi – Gyaku hanmi",5));
tecniche.fondamentali.push(tecniche("Tsugi Ashi – Ushiro tsugi ashi",5));
tecniche.fondamentali.push(tecniche("Ayumi ashi – Ushiro ayumi ashi",5));
tecniche.fondamentali.push(tecniche("Kaiten – Tenkan – Irimi tenkan",5));
tecniche.fondamentali.push(tecniche("Shikko – Ushiro shikko",5));
tecniche.fondamentali.push(tecniche("Mae ukemi",5));
tecniche.fondamentali.push(tecniche("Yoko ukemi",5));
tecniche.fondamentali.push(tecniche("Ushiro ukemi",5));


//tecniche.taijutsu = [];
tecniche.taijutsu.push(tecniche("Katate Dori Tai No Henko (Kihon e Ki-no-nagare)",5));
tecniche.taijutsu.push(tecniche("Morote Dori Kokyu Ho (Kihon)",5));
tecniche.taijutsu.push(tecniche("Shomen Uchi Dai Ikkyo (Omote e Ura)",5));
tecniche.taijutsu.push(tecniche("Katate Dori Shiho Nage (Omote e Ura)",5));
tecniche.taijutsu.push(tecniche("Shomen Uchi Irimi Nage",5));
tecniche.taijutsu.push(tecniche("Suwari Waza Ryote Dori Kokyu Ho (Chudan)",5));

tecniche.taijutsu.push(tecniche("Shomen Uchi Dai Nikyo (Omote e Ura)",4));
tecniche.taijutsu.push(tecniche("Kata Dori Dai Ikkyo (Omote e Ura)",4));
tecniche.taijutsu.push(tecniche("Kata Dori Dai Nikyo (Omote e Ura)",4));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Shiho Nage (solo Omote)",4));

tecniche.taijutsu.push(tecniche("Shomen Uchi Dai Sankyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Shomen Uchi Dai Yonkyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Kata Dori Dai Sankyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Kata Dori Dai Yonkyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Ryote Dori Shiho Nage (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Shomen Uchi Kote Gaeshi",3));
tecniche.taijutsu.push(tecniche("Tsuki (Chudan) Kote Gaeshi",3));
tecniche.taijutsu.push(tecniche("Katate Dori Kote Gaeshi",3));
tecniche.taijutsu.push(tecniche("Ryote Dori Tenchi Nage",3));
tecniche.taijutsu.push(tecniche("Tsuki (Chudan) Irimi Nage",3));
tecniche.taijutsu.push(tecniche("Suwari Waza Shomen Uchi Dai Ikkyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Suwari Waza Shomen Uchi Dai Nikyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Suwari Waza Shomen Uchi Dai Sankyo (Omote e Ura)",3));
tecniche.taijutsu.push(tecniche("Suwari Waza Shomen Uchi Dai Yonkyo (Omote e Ura)",3));

tecniche.taijutsu.push(tecniche("Yokomen Uchi Dai Ikkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Dai Nikyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Dai Sankyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Dai Yonkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Dai Gokyo (solo Ura)",2));
tecniche.taijutsu.push(tecniche("Katate Dori Irimi Nage (Jodan/Chudan/Gedan)",2));
tecniche.taijutsu.push(tecniche("Yokomen Uchi Irimi Nage",2));
tecniche.taijutsu.push(tecniche("Katate Dori Kaiten Nage (Soto e Uchi Mawari)",2));
tecniche.taijutsu.push(tecniche("Shomen Uchi Shiho Nage (solo Omote)",2));
tecniche.taijutsu.push(tecniche("Katate Dori Dai Ikkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Katate Dori Dai Nikyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Katate Dori Dai Sankyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Katate Dori Dai Yonkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ryote Dori Dai Ikkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ryote Dori Dai Nikyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ryote Dori Dai Sankyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ryote Dori Dai Yonkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ushiro Ryote Dori Dai Ikkyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Ushiro Ryote Dori Dai Nikyo (Omote e Ura)",2));
tecniche.taijutsu.push(tecniche("Hanmi Handachi Waza Katate Dori Shiho Nage (solo Omote)",2));

tecniche.taijutsu.push(tecniche("Shomen Uchi Kaiten Nage (Soto e Uchi Mawari)",1));
tecniche.taijutsu.push(tecniche("Tsuki (Chudan) Kaiten Nage (solo Soto Mawari)",1));
tecniche.taijutsu.push(tecniche("Kosa Dori Kote Gaeshi",1));
tecniche.taijutsu.push(tecniche("Ryote Dori Kote Gaeshi",1));
tecniche.taijutsu.push(tecniche("Katate Dori Kokyu Nage (Jodan/Chudan/Gedan)",1));
tecniche.taijutsu.push(tecniche("Ushiro Ryote Dori Dai Sankyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Ushiro Ryote Dori Dai Yonkyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Kata Dori Dai Ikkyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Kata Dori Dai Nikyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Kata Dori Dai Sankyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Kata Dori Dai Yonkyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Yokomen Uchi Dai Ikkyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Yokomen Uchi Dai Nikyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Yokomen Uchi Dai Sankyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Yokomen Uchi Dai Yonkyo (Omote e Ura)",1));
tecniche.taijutsu.push(tecniche("Suwari Waza Yokomen Uchi Dai Gokyo (solo Ura)",1));
tecniche.taijutsu.push(tecniche("Hanmi Handachi Waza Katate Dori Kaiten Nage (solo Soto Mawari)",1));

//tecniche.bukiwaza = new Object();
//tecniche.bukiwaza.ken= new Object();
//tecniche.bukiwaza.ken.Ken_suburi_nana_hon=[];
tecniche.bukiwaza.ken.Ken_suburi_nana_hon.push(tecnique("Ichi no suburi",5));
tecniche.bukiwaza.ken.Ken_suburi_nana_hon.push(tecnique("Ni no suburi",5));
tecniche.bukiwaza.ken.Ken_suburi_nana_hon.push(tecnique("San no suburi",5));


tecniche.bukiwaza.jo = new Object();
function jo_group(name,level)
{
	this.nome=name;
	this.cintura=level;
	this.elements=[];
}

//tecniche.bukiwaza.jo.Jo_suburi_nijuppon = [];
tecniche.bukiwaza.jo.Jo_suburi_nijuppon.push(jo_group("Ski go hon",5));