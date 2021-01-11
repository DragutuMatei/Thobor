import React from "react";
import Press from "./Press";

function Visu() {
  return (
    <>
      <div className="despre">
        <img src={require("../../assets/despre/visu.png").default} alt="" />
        <div className="s">
          <h1>Visul nostru</h1>
          <p>
            Echipa THOBOR a Colegiului Național “Calistrat Hogaş” Tecuci, este
            formată din optsprezece liceeni si doi mentori care au îndrăznit să
            viseze. Plecată dintr-o zonă fără tradiții în domeniu, echipa și-a
            propus să aducă în comunitate o idee nouă, care să-i inspire pe toți
            colegii, care să deschidă noi direcții de evoluție pentru copii.
          </p>
          <p>
            Echipa are deja o vechime de 3 ani și pe parcursul acestor ani am
            învățat că First este ca o călătorie, o călătorie pe care ai putea
            să o oprești în orice moment dar care te motivează continuu să mergi
            mai departe, să încerci mai mult și să te dedici și mai mult.
          </p>
          <div className="downs">
            <Press
              perioada="Perioada 2017-2018:"
              txt="Primul an de competitie, acest an am putea să-l numim anul încercărilor. Eram siguri ca proiectul ne va ajută să fim inventivi și știam sigur că vom avea multe de învățat atât științific, cât și din punct de vedere al comunicării, de asemenea, munca în echipă ne-a oferit ocazia să ne descoperim pe noi înșine, să ne cunoaștem reciproc și să avem o altă perspectivă asupra științei. Tema propusă pentru sezonul de anul acesta este Relic Recovery , în care roboțelul trebuie să adune cuburi și să le plaseze într-un raft, numit Cryptobox. La finalul sezonului am fost bucuroși să vedem primele noastre premii Think Award și Control Award 2nd place și fericirea cea mai mare am simțit-o atunci când dupa toate eforturile am putut spune că ,în sfârșit, Tecuciul se află pe harta roboticii."
            />
            <Press
              perioada="Perioada 2018-2019:"
              txt="Al doilea an în competiție, un nou început, forțe noi, dar și oameni noi. Complexitatea competiției crescuse prin introducerea fazei regionale din februarie 2019, având drept miză calificarea la etapa națională, dar nu am lăsat acest lucru să ne doboare. Am vrut să ne lăsam amprenta pe noua generație, așa că promovând valorile FIRST, echipa a fost prezentă în peste 15 unități de învățământ din oraș și din localitățile din zonă, deschizând noi orizonturi și alternative de traseu educațional pentru copii, dar să nu uităm nici de workshopurile si cercurile de robotică. La sfârșitul acestui sezon, ne-am putut însuma rezultatele în portofoliu: WINNING ALLIANCE–first pick și INSPIRE AWARD 2nd place, FINALIST ALLIANCE–first pick, COMPASS AWARD și Nație Prin Educație-2nd place."
            />
            <Press
              perioada="Perioada 2019-2020:"
              txt="Cu o noua temă și cu un nou sezon in față, am început și al treilea an al competiției. Anul acesta am fost nevoiți să ne reînnoim ehipa in proporție de 70%, așa că încercările concursului aveau să fie resimțite la prima mână de către noii noștri membri și voluntari. Entuziasmați, pregătiți și cu multe vise în buzunar am făcut conștiința cu tema din sezonul numărul IV, Skystone. Am asamblat, am scris, am programat, am deșurubat si am gândit și apoi am luat-o de la capăt. Anul acesta am reușit să organizăm primul DEMO marca Thobor, primul și din județul nostru. Peste 10 echipe din țară s-au adunat pe teritoriul tecucean să simuleze competiția din marele orașe. La sfârșitul sezonului am adunat 4 DEMO-uri în portofoliul nostru, unde am reușit să aducem acasă fiecare premiu WINNING ALLIANCE–first pick. Cu bagajele făcute, gata pentru regionala de la Iași, am fost anunțați că virusul care răsuna de la știri și televizoare, avea să fie mult mai mult decât un cap de știri trecător. Nevoiți să stăm acasă am decis că nu putem sa rămânem indiferenți asupra situației de alertă globală, așa că ne-am organizat și am confecționat peste 300 de viziere de protecție si le-am împărțit spitalelor, medicilor, secțiilor de poliție și multor alte unități."
            />
          </div>
          <p>
            De-a lungul acestor ani am avut parte de suișuri și coborâșuri, am
            învățat că viața are o modalitate de a testa voința unei persoane,
            fie prin a nu se întâmpla absolut nimic, fie întâmplându-se totul în
            același timp, dar după fiecare lovitură ne-am ridicat și am
            demonstrat că putem, ne-am demonstrat ca fiecare întâlnire, fiecare
            minut, ora și chiar zi alocata a contat. Știim că am ajuns până aici
            cu un motiv și ca nu suntem gata să renunțăm, vom lupta si vom da
            tot ce avem mai bun ca să câștigăm!
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Visu;
