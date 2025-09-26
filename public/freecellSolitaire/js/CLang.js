var TEXT_GAMEOVER = "YOU WIN";
var TEXT_MOVES = "MOVES";
var TEXT_SCORE = "SCORE";
var TEXT_ARE_YOU_SURE = "ARE YOU SURE?";
var TEXT_CARD = "CARD";
var TEXT_CARDS = "CARDS";

var TEXT_HELP1 = "THE CARD PILES IN BOARD, CAN BE BUILD DOWN BY DECRESCENT CARD RANK WITH ALTERNATE COLORS";
var TEXT_HELP2 = "YOU CAN USE A FREE CELL, TO TEMPORARILY DISCARD A CARD. ANYWAY THIS WILL REDUCE THE NUMBER OF CARDS YOU CAN DRAG SIMULTANEOUSLY";
var TEXT_HELP3 = "THE GOAL IS TO BUILD UP FOUR FOUNDATIONS BY SUIT, FROM ACE TO KING ";

var TEXT_HINT = "NOT ENOUGH EMPTY FREE CELLS. NOW YOU CAN MOVE JUST %s %s AT ONCE";
var TEXT_HINT_MOVE = "NO MORE MOVES AVAILABLES. RESTART THE GAME.";

var TEXT_HELP1_PAGE2 = "SCORE SYSTEM";
var TEXT_HELP2_PAGE2 = "You start with %s points";

var TEXT_LOSE1_PAGE2 = "Every time you move a card from its position you lose %s point!! Try to complete the game with as few moves as possible!";

var TEXT_DEVELOPED = "DEVELOPED BY";
var TEXT_PLAY = "PLAY";
var TEXT_MORE_GAMES = "MORE SOLITAIRES";
var TEXT_CREDITS_URL = "www.codethislab.com";

function refreshLanguage() {

    if (s_iCurLang === LANG_AR) {
        s_oCanvas.setAttribute('dir', 'rtl');
    } else {
        s_oCanvas.setAttribute('dir', 'ltr');
    }

    switch (s_iCurLang) {
        case LANG_EN:
            {
                TEXT_GAMEOVER = "YOU WIN";
                TEXT_MOVES = "MOVES";
                TEXT_SCORE = "SCORE";
                TEXT_ARE_YOU_SURE = "ARE YOU SURE?";
                TEXT_CARD = "CARD";
                TEXT_CARDS = "CARDS";
                TEXT_HELP1 = "THE CARD PILES IN BOARD, CAN BE BUILD DOWN BY DECRESCENT CARD RANK WITH ALTERNATE COLORS";
                TEXT_HELP2 = "YOU CAN USE A FREE CELL, TO TEMPORARILY DISCARD A CARD. ANYWAY THIS WILL REDUCE THE NUMBER OF CARDS YOU CAN DRAG SIMULTANEOUSLY";
                TEXT_HELP3 = "THE GOAL IS TO BUILD UP FOUR FOUNDATIONS BY SUIT, FROM ACE TO KING ";
                TEXT_HINT = "NOT ENOUGH EMPTY FREE CELLS. NOW YOU CAN MOVE JUST %s %s AT ONCE";
                TEXT_HINT_MOVE = "NO MORE MOVES AVAILABLES. RESTART THE GAME.";
                TEXT_HELP1_PAGE2 = "SCORE SYSTEM";
                TEXT_HELP2_PAGE2 = "You start with %s points";
                TEXT_LOSE1_PAGE2 = "Every time you move a card from its position you lose %s point!! Try to complete the game with as few moves as possible!";
                TEXT_DEVELOPED = "DEVELOPED BY";
                TEXT_PLAY = "PLAY";
                TEXT_MORE_GAMES = "MORE SOLITAIRES";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "FreeCell Solitaire";
                break;
            }
        case LANG_ES:
            {
                TEXT_GAMEOVER = "HAS GANADO";
                TEXT_MOVES = "MOVIMIENTOS";
                TEXT_SCORE = "PUNTUACIÓN";
                TEXT_ARE_YOU_SURE = "¿ESTÁS SEGURO?";
                TEXT_CARD = "CARTA";
                TEXT_CARDS = "CARTAS";
                TEXT_PLAY = "JUGAR";
                TEXT_HELP1 = "LAS PILAS DE CARTAS EN EL TABLERO PUEDEN FORMARSE EN ORDEN DESCENDENTE CON COLORES ALTERNOS";
                TEXT_HELP2 = "PUEDES USAR UNA CELDA LIBRE PARA DESCARTAR TEMPORALMENTE UNA CARTA. SIN EMBARGO, ESO REDUCIRÁ LA CANTIDAD DE CARTAS QUE PUEDES ARRASTRAR AL MISMO TIEMPO";
                TEXT_HELP3 = "EL OBJETIVO ES FORMAR CUATRO FUNDACIONES POR PALO, DEL AS AL REY";
                TEXT_HINT = "NO HAY CELDAS LIBRES SUFICIENTES. SOLO PUEDES MOVER %s %s A LA VEZ";
                TEXT_HINT_MOVE = "NO HAY MÁS MOVIMIENTOS DISPONIBLES. REINICIA EL JUEGO.";
                TEXT_HELP1_PAGE2 = "SISTEMA DE PUNTUACIÓN";
                TEXT_HELP2_PAGE2 = "Comienzas con %s puntos";
                TEXT_LOSE1_PAGE2 = "Cada vez que mueves una carta de su lugar, ¡pierdes %s punto! Intenta completar el juego con el menor número de movimientos posible.";
                TEXT_DEVELOPED = "DESARROLLADO POR";
                TEXT_MORE_GAMES = "MÁS SOLITARIOS";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "Solitario Carta Blanca";
                break;
            }
        case LANG_FR:
            {
                TEXT_GAMEOVER = "VOUS AVEZ GAGNÉ  ";
                TEXT_MOVES = "COUPS";
                TEXT_SCORE = "SCORE";
                TEXT_ARE_YOU_SURE = "ÊTES-VOUS SÛR ? ";
                TEXT_CARD = "CARTE";
                TEXT_CARDS = "CARTES";
                TEXT_PLAY = "JOUER";
                TEXT_HELP1 = "LES PILES DE CARTES SUR LE PLATEAU PEUVENT ÊTRE CONSTRUITES PAR VALEUR DÉCROISSANTE AVEC DES COULEURS ALTERNÉES";
                TEXT_HELP2 = "VOUS POUVEZ UTILISER UNE CELLULE LIBRE POUR DÉPOSER TEMPORAIREMENT UNE CARTE. CEPENDANT, CELA RÉDUIT LE NOMBRE DE CARTES QUE VOUS POUVEZ DÉPLACER EN MÊME TEMPS";
                TEXT_HELP3 = "LE BUT EST DE CONSTRUIRE QUATRE FONDATIONS PAR COULEUR, DE L'AS AU ROI";
                TEXT_HINT = "PAS ASSEZ DE CELLULES LIBRES VIDES. VOUS NE POUVEZ DÉPLACER QUE %s %s À LA FOIS";
                TEXT_HINT_MOVE = "PLUS AUCUN COUP DISPONIBLE. RECOMMENCEZ LA PARTIE.";
                TEXT_HELP1_PAGE2 = "SYSTÈME DE SCORE";
                TEXT_HELP2_PAGE2 = "Vous commencez avec %s points";
                TEXT_LOSE1_PAGE2 = "Chaque fois que vous déplacez une carte de sa position, vous perdez %s point !! Essayez de finir la partie avec le moins de déplacements possible !";
                TEXT_DEVELOPED = "DÉVELOPPÉ PAR";
                TEXT_MORE_GAMES = "PLUS DE SOLITAIRES";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "Solitaire FreeCell";
                break;
            }
        case LANG_DE:
            {
                TEXT_GAMEOVER = "DU HAST GEWONNEN";
                TEXT_MOVES = "ZÜGE";
                TEXT_SCORE = "PUNKTZAHL";
                TEXT_ARE_YOU_SURE = "BIST DU SICHER?";
                TEXT_CARD = "KARTE";
                TEXT_CARDS = "KARTEN";
                TEXT_PLAY = "SPIELEN";
                TEXT_HELP1 = "DIE KARTENSTAPEL AUF DEM SPIELFELD KÖNNEN IN ABSTEIGENDER REIHENFOLGE MIT ABWECHSELNDEN FARBEN AUFGEBAUT WERDEN";
                TEXT_HELP2 = "DU KANNST EINE FREIE ZELLE VERWENDEN, UM EINE KARTE VORÜBERGEHEND ABZULEGEN. DADURCH WIRD JEDOCH DIE ANZAHL DER KARTEN REDUZIERT, DIE DU GLEICHZEITIG ZIEHEN KANNST";
                TEXT_HELP3 = "DAS ZIEL IST ES, VIER FUNDAMENTE NACH FARBEN VOM ASS BIS ZUM KÖNIG AUFZUBAUEN";
                TEXT_HINT = "NICHT GENÜGEND FREIE ZELLEN. DU KANNST NUR %s %s AUF EINMAL BEWEGEN";
                TEXT_HINT_MOVE = "KEINE ZÜGE MEHR VERFÜGBAR. SPIEL NEU STARTEN.";
                TEXT_HELP1_PAGE2 = "PUNKTESYSTEM";
                TEXT_HELP2_PAGE2 = "Du startest mit %s Punkten";
                TEXT_LOSE1_PAGE2 = "Jedes Mal, wenn du eine Karte bewegst, verlierst du %s Punkt!! Versuche, das Spiel mit so wenigen Zügen wie möglich zu beenden!";
                TEXT_DEVELOPED = "ENTWICKELT VON";
                TEXT_MORE_GAMES = "MEHR SOLITÄRSPIELE";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "FreeCell Solitär";
                break;
            }
        case LANG_PT:
            {
                TEXT_GAMEOVER = "VOCÊ VENCEU";
                TEXT_MOVES = "MOVIMENTOS";
                TEXT_SCORE = "PONTUAÇÃO";
                TEXT_ARE_YOU_SURE = "TEM CERTEZA?";
                TEXT_CARD = "CARTA";
                TEXT_CARDS = "CARTAS";
                TEXT_PLAY = "JOGAR";
                TEXT_HELP1 = "OS MONTES DE CARTAS NO TABULEIRO PODEM SER CONSTRUÍDOS EM ORDEM DECRESCENTE COM CORES ALTERNADAS";
                TEXT_HELP2 = "VOCÊ PODE USAR UMA CÉLULA LIVRE PARA DESCARTAR TEMPORARIAMENTE UMA CARTA. NO ENTANTO, ISSO REDUZ O NÚMERO DE CARTAS QUE VOCÊ PODE ARRASTAR AO MESMO TEMPO";
                TEXT_HELP3 = "O OBJETIVO É CONSTRUIR QUATRO FUNDAÇÕES POR NAIPE, DO ÁS AO REI";
                TEXT_HINT = "NÃO HÁ CÉLULAS LIVRES SUFICIENTES. VOCÊ SÓ PODE MOVER %s %s DE UMA VEZ";
                TEXT_HINT_MOVE = "NÃO HÁ MAIS MOVIMENTOS DISPONÍVEIS. REINICIE O JOGO.";
                TEXT_HELP1_PAGE2 = "SISTEMA DE PONTUAÇÃO";
                TEXT_HELP2_PAGE2 = "Você começa com %s pontos";
                TEXT_LOSE1_PAGE2 = "Cada vez que você move uma carta de sua posição, perde %s ponto!! Tente completar o jogo com o menor número possível de movimentos!";
                TEXT_DEVELOPED = "DESENVOLVIDO POR";
                TEXT_MORE_GAMES = "MAIS PACIÊNCIAS";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "FreeCell Paciência";
                break;
            }

        case LANG_IT:
            {
                TEXT_GAMEOVER = "HAI VINTO";
                TEXT_MOVES = "MOSSE";
                TEXT_SCORE = "PUNTEGGIO";
                TEXT_ARE_YOU_SURE = "SEI SICURO?";
                TEXT_CARD = "CARTA";
                TEXT_CARDS = "CARTE";
                TEXT_PLAY = "GIOCA";
                TEXT_HELP1 = "LE PILE DI CARTE SUL TAVOLO POSSONO ESSERE COSTRUITE IN ORDINE DECRESCENTE ALTERNANDO I COLORI";
                TEXT_HELP2 = "PUOI USARE UNA CELLA LIBERA PER SCARTARE TEMPORANEAMENTE UNA CARTA. TUTTAVIA QUESTO RIDUCE IL NUMERO DI CARTE CHE PUOI TRASCINARE CONTEMPORANEAMENTE";
                TEXT_HELP3 = "L'OBIETTIVO È COSTRUIRE QUATTRO FONDAMENTA PER SEME, DALL'ASSO AL RE";
                TEXT_HINT = "NON CI SONO ABBASTANZA CELLE LIBERE VUOTE. PUOI SPOSTARE SOLO %s %s ALLA VOLTA";
                TEXT_HINT_MOVE = "NESSUNA MOSSA DISPONIBILE. RIAVVIA IL GIOCO.";
                TEXT_HELP1_PAGE2 = "SISTEMA DI PUNTEGGIO";
                TEXT_HELP2_PAGE2 = "Inizi con %s punti";
                TEXT_LOSE1_PAGE2 = "Ogni volta che sposti una carta dalla sua posizione, perdi %s punto!! Cerca di completare il gioco con il minor numero di mosse possibile!";
                TEXT_DEVELOPED = "SVILUPPATO DA";
                TEXT_MORE_GAMES = "ALTRI SOLITARI";
                TEXT_CREDITS_URL = "www.codethislab.it";
                document.querySelector('title').textContent = "Solitario FreeCell";
                break;
            }
        case LANG_RU:
            {
                TEXT_GAMEOVER = "ВЫ ВЫИГРАЛИ";
                TEXT_MOVES = "ХОДЫ";
                TEXT_SCORE = "СЧЕТ";
                TEXT_ARE_YOU_SURE = "ВЫ УВЕРЕНЫ?";
                TEXT_CARD = "КАРТА";
                TEXT_CARDS = "КАРТЫ";
                TEXT_PLAY = "ИГРАТЬ";
                TEXT_HELP1 = "СТОПКИ НА ПОЛЕ МОЖНО СОБИРАТЬ ПО УБЫВАНИЮ С ЧЕРЕДУЮЩИМИСЯ ЦВЕТАМИ";
                TEXT_HELP2 = "ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ СВОБОДНУЮ ЯЧЕЙКУ, ЧТОБЫ ВРЕМЕННО УБРАТЬ КАРТУ. ОДНАКО ЭТО СОКРАЩАЕТ КОЛИЧЕСТВО КАРТ, КОТОРЫЕ МОЖНО ПЕРЕМЕСТИТЬ ЗА РАЗ";
                TEXT_HELP3 = "ЦЕЛЬ — СОБРАТЬ ЧЕТЫРЕ КОЛОДЫ ПО МАСТЯМ, ОТ ТУЗА ДО КОРОЛЯ";
                TEXT_HINT = "НЕДОСТАТОЧНО СВОБОДНЫХ ЯЧЕЕК. МОЖНО ПЕРЕМЕСТИТЬ ТОЛЬКО %s %s ЗА РАЗ";
                TEXT_HINT_MOVE = "БОЛЬШЕ НЕТ ДОСТУПНЫХ ХОДОВ. НАЧНИТЕ ИГРУ ЗАНОВО.";
                TEXT_HELP1_PAGE2 = "СИСТЕМА ОЧКОВ";
                TEXT_HELP2_PAGE2 = "Вы начинаете с %s очков";
                TEXT_LOSE1_PAGE2 = "Каждый раз, когда вы двигаете карту, вы теряете %s очко!! Постарайтесь завершить игру с минимальным количеством ходов!";
                TEXT_DEVELOPED = "РАЗРАБОТАНО";
                TEXT_MORE_GAMES = "БОЛЬШЕ ПАСЬЯНСОВ";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "Пасьянс «Свободная ячейка»";

                break;
            }
        case LANG_TR:
            {
                TEXT_GAMEOVER = "KAZANDINIZ";
                TEXT_MOVES = "HAMLE";
                TEXT_SCORE = "PUAN";
                TEXT_ARE_YOU_SURE = "EMİN MİSİNİZ?";
                TEXT_CARD = "KART";
                TEXT_CARDS = "KARTLAR";
                TEXT_PLAY = "OYNA";
                TEXT_HELP1 = "TAHTADAKİ KART YIĞINLARI AZALAN SIRAYLA VE DEĞİŞEN RENKLERLE OLUŞTURULABİLİR";
                TEXT_HELP2 = "BİR KARTI GEÇİCİ OLARAK KOYMAK İÇİN BOŞ BİR HÜCRE KULLANABİLİRSİNİZ. ANCAK BU, AYNI ANDA SÜRÜKLEYEBİLECEĞİNİZ KART SAYISINI AZALTIR";
                TEXT_HELP3 = "AMAÇ, 4 TEMEL DESTEYİ RENKLERİNE GÖRE AS’TAN KRAL’A DOĞRU OLUŞTURMAKTIR";
                TEXT_HINT = "YETERLİ BOŞ HÜCRE YOK. ŞU ANDA SADECE %s %s HAREKET ETTİREBİLİRSİNİZ";
                TEXT_HINT_MOVE = "HİÇBİR HAMLE KALMADI. OYUNU YENİDEN BAŞLATIN.";
                TEXT_HELP1_PAGE2 = "PUANLAMA SİSTEMİ";
                TEXT_HELP2_PAGE2 = "%s puanla başlarsınız";
                TEXT_LOSE1_PAGE2 = "Bir kartı her oynattığınızda %s puan kaybedersiniz!! Oyunu mümkün olduğunca az hamlede tamamlamaya çalışın!";
                TEXT_DEVELOPED = "GELİŞTİREN";
                TEXT_MORE_GAMES = "DAHA FAZLA SOLİTAİRE";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "FreeCell Oyunu";
                break;
            }
        case LANG_AR:
            {
                TEXT_GAMEOVER = "فُزْتَ";
                TEXT_MOVES = "الحركات";
                TEXT_SCORE = "النقاط";
                TEXT_ARE_YOU_SURE = "هل أنت متأكد؟";
                TEXT_CARD = "بطاقة";
                TEXT_CARDS = "بطاقات";
                TEXT_PLAY = "العب";
                TEXT_HELP1 = "يمكن ترتيب أكوام البطاقات على اللوحة بتناقص الرتب وبألوان متبادلة";
                TEXT_HELP2 = "يمكنك استخدام خلية فارغة للتخلص مؤقتًا من بطاقة. ومع ذلك، سيؤدي هذا إلى تقليل عدد البطاقات التي يمكنك سحبها في نفس الوقت";
                TEXT_HELP3 = "الهدف هو إنشاء أربع مجموعات حسب النوع من الآس إلى الملك";
                TEXT_HINT = "لا توجد خلايا فارغة كافية. يمكنك تحريك %s %s فقط في المرة الواحدة";
                TEXT_HINT_MOVE = "لا توجد حركات متبقية. أعد تشغيل اللعبة.";
                TEXT_HELP1_PAGE2 = "نظام النقاط";
                TEXT_HELP2_PAGE2 = "تبدأ بـ %s نقطة";
                TEXT_LOSE1_PAGE2 = "في كل مرة تحرك فيها بطاقة من مكانها، تخسر %s نقطة!! حاول إنهاء اللعبة بأقل عدد من الحركات!";
                TEXT_DEVELOPED = "تم التطوير بواسطة";
                TEXT_MORE_GAMES = "المزيد من ألعاب السوليتير";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "سوليتير الخلية الحرة";
                break;
            }
        case LANG_HI:
            {
                TEXT_GAMEOVER = "आप जीत गए";
                TEXT_MOVES = "चालें";
                TEXT_SCORE = "स्कोर";
                TEXT_ARE_YOU_SURE = "क्या आप सुनिश्चित हैं?";
                TEXT_CARD = "कार्ड";
                TEXT_CARDS = "कार्ड्स";
                TEXT_PLAY = "खेलें";
                TEXT_HELP1 = "बोर्ड पर कार्ड स्टैक्स घटते क्रम में और वैकल्पिक रंगों के साथ बनाए जा सकते हैं";
                TEXT_HELP2 = "आप एक फ्री सेल का उपयोग करके एक कार्ड को अस्थायी रूप से हटा सकते हैं। हालांकि, इससे एक साथ खींचे जा सकने वाले कार्ड्स की संख्या कम हो जाएगी";
                TEXT_HELP3 = "लक्ष्य है चार नींवों को सूट अनुसार एस से किंग तक बनाना";
                TEXT_HINT = "पर्याप्त खाली फ्री सेल्स नहीं हैं। आप एक बार में केवल %s %s ही मूव कर सकते हैं";
                TEXT_HINT_MOVE = "कोई और चाल उपलब्ध नहीं है। गेम फिर से शुरू करें।";
                TEXT_HELP1_PAGE2 = "स्कोर प्रणाली";
                TEXT_HELP2_PAGE2 = "आप %s अंकों से शुरू करते हैं";
                TEXT_LOSE1_PAGE2 = "हर बार जब आप एक कार्ड को उसकी स्थिति से हटाते हैं, तो आप %s अंक खोते हैं!! गेम को कम से कम चालों में पूरा करने की कोशिश करें!";
                TEXT_DEVELOPED = "द्वारा विकसित";
                TEXT_MORE_GAMES = "अधिक सॉलिटेयर";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "फ्रीसेल सॉलिटेयर";
                break;
            }
        case LANG_ID:
            {
                TEXT_GAMEOVER = "KAMU MENANG";
                TEXT_MOVES = "LANGKAH";
                TEXT_SCORE = "SKOR";
                TEXT_ARE_YOU_SURE = "APA KAMU YAKIN?";
                TEXT_CARD = "KARTU";
                TEXT_CARDS = "KARTU-KARTU";
                TEXT_PLAY = "MAIN";
                TEXT_HELP1 = "TUMPUKAN KARTU DI PAPAN DAPAT DIBENTUK SECARA MENURUN DENGAN WARNA YANG BERGANTIAN";
                TEXT_HELP2 = "KAMU DAPAT MENGGUNAKAN SEL BEBAS UNTUK MENYIMPAN SEMENTARA SEBUAH KARTU. NAMUN, INI AKAN MENGURANGI JUMLAH KARTU YANG BISA KAMU SERET SEKALIGUS";
                TEXT_HELP3 = "TUJUANNYA ADALAH MENYUSUN EMPAT FONDASI BERDASARKAN WARNA DARI AS KE RAJA";
                TEXT_HINT = "TIDAK CUKUP SEL KOSONG. KAMU HANYA BISA MEMINDAHKAN %s %s SEKALIGUS";
                TEXT_HINT_MOVE = "TIDAK ADA LANGKAH TERSISA. MULAI ULANG PERMAINAN.";
                TEXT_HELP1_PAGE2 = "SISTEM SKOR";
                TEXT_HELP2_PAGE2 = "Kamu mulai dengan %s poin";
                TEXT_LOSE1_PAGE2 = "Setiap kali kamu memindahkan kartu dari posisinya, kamu kehilangan %s poin!! Cobalah selesaikan permainan dengan langkah sesedikit mungkin!";
                TEXT_DEVELOPED = "DIKEMBANGKAN OLEH";
                TEXT_MORE_GAMES = "LEBIH BANYAK SOLITAIRE";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "Solitair FreeCell";
                break;
            }
        case LANG_JA:
            {
                TEXT_GAMEOVER = "勝利！";
                TEXT_MOVES = "手数";
                TEXT_SCORE = "スコア";
                TEXT_ARE_YOU_SURE = "本当にいいですか？";
                TEXT_CARD = "カード";
                TEXT_CARDS = "カード";
                TEXT_PLAY = "プレイ";
                TEXT_HELP1 = "盤面 の カード 山 は、色 を 交互 に しながら ランク を 下げて 並べられます";
                TEXT_HELP2 = "フリーセル を 使って 一時的 に カード を 置く こと が できます。 ただし、同時 に 移動 できる カード の 数 が 減ります";
                TEXT_HELP3 = "目標 は、4つ の 土台 に スート ごと に A から K まで 積み上げる こと です";
                TEXT_HINT = "空いている フリーセル が 足りません。 一度 に 移動 できる の は %s %s のみ です";
                TEXT_HINT_MOVE = "これ 以上 の 手 は ありません。 ゲーム を 再開 して ください。";
                TEXT_HELP1_PAGE2 = "スコアシステム";
                TEXT_HELP2_PAGE2 = "あなた は %s ポイント から 始まります";
                TEXT_LOSE1_PAGE2 = "カード を 移動 する たび に %s ポイント 失われます!! できるだけ 少ない 手数 で ゲーム を クリア しましょう！";
                TEXT_DEVELOPED = "開発： ";
                TEXT_MORE_GAMES = "他のソリティア";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "フリーセル ソリティア";
                break;
            }
        case LANG_ZH:
            {
                TEXT_GAMEOVER = "你赢了";
                TEXT_MOVES = "步数";
                TEXT_SCORE = "得分";
                TEXT_ARE_YOU_SURE = "你确定吗？";
                TEXT_CARD = "卡牌";
                TEXT_CARDS = "卡牌";
                TEXT_PLAY = "开始";
                TEXT_HELP1 = "牌堆可以按递减顺序排列， 并交替颜色";
                TEXT_HELP2 = "你可以使用一个空单元暂时放置一张牌。不过，这会减少你能同时拖动的牌数 你 可以 使用 一个 空 单元 暂时 放置 一 张 牌。 不过， 这 会 减少 你 能 同时 拖动 的 牌 数";
                TEXT_HELP3 = "目标是按花色将四个基础堆从A到K依次建立";
                TEXT_HINT = "没有足够的空闲单元。你一次只能移动 %s %s 张牌";
                TEXT_HINT_MOVE = "没有可用的移动。 重新开始游戏。";
                TEXT_HELP1_PAGE2 = "得分系统";
                TEXT_HELP2_PAGE2 = "你从 %s 分开始";
                TEXT_LOSE1_PAGE2 = "每移动一张牌，你会失去 %s 分！尽量用最少的移动完成游戏！";
                TEXT_DEVELOPED = "开发者：";
                TEXT_MORE_GAMES = "更多纸牌游戏";
                TEXT_CREDITS_URL = "www.codethislab.com";
                document.querySelector('title').textContent = "空当接龙纸牌 - CTL MStore";
                break;
            }

    }
}