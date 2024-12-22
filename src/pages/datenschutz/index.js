import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';

const Imprint = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="flex-start"
      sx={{
        overflow: 'hidden',
        px: { xs: 4, md: 10, lg: 20, xl: 30 },
        pb: { xs: 6, md: 20, lg: 25 }
      }}
      gap={4}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          pt: { xs: 6, md: 20, lg: 25 }
        }}
      >
        <Typography variant="h1" sx={{ mb: { xs: 2, sm: 3, md: 4, lg: 6 }, fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48, lg: 64 } }}>
          Datenschutz
          <Typography component="span" variant="h2" sx={{ color: theme.palette.secondary[500], display: 'block' }}>
            Kalkulatrix
          </Typography>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          mb: { xs: 2, md: 4, lg: 6 }
        }}
      >
        <h1>Datenschutz&shy;erkl&auml;rung</h1>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>{' '}
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
          Datenschutzerkl&auml;rung.
        </p>
        <h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4>{' '}
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.
        </p>{' '}
        <h4>Wie erfassen wir Ihre Daten?</h4>{' '}
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
          Sie in ein Kontaktformular eingeben.
        </p>{' '}
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
          allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
          erfolgt automatisch, sobald Sie diese Website betreten.
        </p>{' '}
        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{' '}
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen
          zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern &uuml;ber die Website Vertr&auml;ge geschlossen oder angebahnt werden
          k&ouml;nnen, werden die &uuml;bermittelten Daten auch f&uuml;r Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
          verarbeitet.
        </p>{' '}
        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{' '}
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
          verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r
          die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
          Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
          Aufsichtsbeh&ouml;rde zu.
        </p>{' '}
        <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
        <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{' '}
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </p>{' '}
        <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
        <h2>2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>
        <h3>Amazon Web Services (AWS)</h3>{' '}
        <p>Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg (nachfolgend AWS).</p>{' '}
        <p>
          Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von AWS verarbeitet. Hierbei k&ouml;nnen
          auch personenbezogene Daten an das Mutterunternehmen von AWS in die USA &uuml;bermittelt werden. Die Daten&uuml;bertragung in die
          USA wird auf die EU-Standardvertragsklauseln gest&uuml;tzt. Details finden Sie hier:{' '}
          <a href="https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/" target="_blank" rel="noopener noreferrer">
            https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/
          </a>
          .
        </p>{' '}
        <p>
          Weitere Informationen entnehmen Sie der Datenschutzerkl&auml;rung von AWS:{' '}
          <a href="https://aws.amazon.com/de/privacy/?nc1=f_pr" target="_blank" rel="noopener noreferrer">
            https://aws.amazon.com/de/privacy/?nc1=f_pr
          </a>
          .
        </p>{' '}
        <p>
          Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
          m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung
          die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
          Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/5776" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/5776
          </a>
          .
        </p>
        <h3>Externes Hosting</h3>{' '}
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
          Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.
        </p>{' '}
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art.
          6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
          einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung
          die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
          Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten
          erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>{' '}
        <p>Wir setzen folgende(n) Hoster ein:</p>
        <p>
          F&uuml;r das Hosting unserer Webseite verwenden wir die Dienste von Netlify. Deshalb werden alle notwendigen Daten die f&uuml;r
          den Aufruf der Webseite ben&ouml;tigt werden (Zugriffsdaten), an Netlify &uuml;bermittelt. Rechtsgrundlage f&uuml;r die
          Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Um den Schutz Ihrer Pers&ouml;nlichkeitsrechte auch im Rahmen dieser
          Daten&uuml;bertragungen zu gew&auml;hrleisten, bedienen wir uns bei der Ausgestaltung der Vertragsverh&auml;ltnisse mit Netlify
          der Standardvertragsklauseln der EU-Kommission gem&auml;&szlig; Art. 46 Abs. 2 lit. c) DSGVO. Diese sind unter
          https://www.netlify.com/legal/netlify-dpa.pdf abrufbar. Bilder und andere Mediendateien, welche in die Webseite eingebettet sind,
          werden bei Render.com gespeichert, dementsprechend k&ouml;nnen beim Aufruf Zugriffsdaten erfasst. Genaueres dazu kann hier
          abgerufen werden: https://render.com/privacy.
        </p>
        <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
        <h3>Datenschutz</h3>{' '}
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
        </p>{' '}
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen
          Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
          erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
        </p>{' '}
        <p>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
          Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>{' '}
        <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>{' '}
        <p>
          Adel Consulting
          <br />
          Felix Adel
          <br />
          Geschwister-Scholl-Str. 3 <br />
          18069 Rostock
        </p>
        <p>
          Telefon: +4915224218602
          <br />
          E-Mail: info@adel-consulting.com
        </p>
        <p>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
          und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
        </p>
        <h3>Speicherdauer</h3>{' '}
        <p>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
          Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend
          machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen
          rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </p>
        <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>{' '}
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs.
          1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
          Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die
          Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in
          den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
          Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre
          Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer
          rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
          Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall
          einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </p>
        <h3>Empfänger von personenbezogenen Daten</h3>{' '}
        <p>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
          eine &Uuml;bermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur
          dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1
          lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung
          geschlossen.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
        <p>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung
          bleibt vom Widerruf unber&uuml;hrt.
        </p>
        <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>{' '}
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
          GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
          EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
          EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
          BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE
          F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER
          GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>{' '}
        <p>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH
          GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R
          DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
          DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        </p>
        <h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3>{' '}
        <p>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{' '}
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
          verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
          die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
          ist.
        </p>
        <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{' '}
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht
          auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{' '}
        <p>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie
          sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
        </p>{' '}
        <ul>
          {' '}
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit,
            um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>{' '}
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.
          </li>{' '}
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
            Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>{' '}
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren
            Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
            Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>{' '}
        </ul>{' '}
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
          eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
        </p>
        <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{' '}
        <p>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
          Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
          verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf
          &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>{' '}
        <p>
          Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
          Dritten mitgelesen werden.
        </p>
        <h3>Verschl&uuml;sselter Zahlungsverkehr auf dieser Website</h3>{' '}
        <p>
          Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.&nbsp;B. Kontonummer bei
          Einzugserm&auml;chtigung) zu &uuml;bermitteln, werden diese Daten zur Zahlungsabwicklung ben&ouml;tigt.
        </p>{' '}
        <p>
          Der Zahlungsverkehr &uuml;ber die g&auml;ngigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt
          ausschlie&szlig;lich &uuml;ber eine verschl&uuml;sselte SSL- bzw. TLS-Verbindung. Eine verschl&uuml;sselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol
          in Ihrer Browserzeile.
        </p>{' '}
        <p>
          Bei verschl&uuml;sselter Kommunikation k&ouml;nnen Ihre Zahlungsdaten, die Sie an uns &uuml;bermitteln, nicht von Dritten
          mitgelesen werden.
        </p>
        <h3>Widerspruch gegen Werbe-E-Mails</h3>{' '}
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht
          ausdr&uuml;cklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten
          sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
          vor.
        </p>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>{' '}
        <p>
          Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und richten auf Ihrem
          Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder
          dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
          gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen oder eine
          automatische L&ouml;schung durch Ihren Webbrowser erfolgt.
        </p>{' '}
        <p>
          Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
          Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten
          (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>{' '}
        <p>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
          nicht funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur
          Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
        </p>{' '}
        <p>
          Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
          erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur
          Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert,
          sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
          notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
          Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
          ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG); die Einwilligung
          ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im
          Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische
          L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
          Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
        </p>{' '}
        <p>Welche Cookies und Dienste auf dieser Website eingesetzt werden, k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.</p>
        <h3>Kontaktformular</h3>{' '}
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen
          dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>{' '}
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
          eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
          &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
          abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash;
          bleiben unber&uuml;hrt.
        </p>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{' '}
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
          personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>{' '}
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
          eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
          &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde; die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
          abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
          Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        </p>
        <h3>Calendly</h3>{' '}
        <p>
          Auf unserer Website haben Sie die M&ouml;glichkeit, Termine mit uns zu vereinbaren. F&uuml;r die Terminbuchung nutzen wir das Tool
          &bdquo;Calendly&ldquo;. Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA (nachfolgend
          &bdquo;Calendly&ldquo;).
        </p>{' '}
        <p>
          Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die daf&uuml;r vorgesehene Maske ein. Die
          eingegebenen Daten werden f&uuml;r die Planung, Durchf&uuml;hrung und ggf. f&uuml;r die Nachbereitung des Termins verwendet. Die
          Termindaten werden f&uuml;r uns auf den Servern von Calendly gespeichert, dessen Datenschutzerkl&auml;rung Sie hier einsehen
          k&ouml;nnen:{' '}
          <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">
            https://calendly.com/privacy
          </a>
          .
        </p>{' '}
        <p>
          Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt. Zwingende gesetzliche Bestimmungen &ndash; insbesondere
          Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
        </p>{' '}
        <p>
          Rechtsgrundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
          an einer m&ouml;glichst unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine entsprechende Einwilligung
          abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
          TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
          (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie
          hier:{' '}
          <a href="https://calendly.com/pages/dpa" target="_blank" rel="noopener noreferrer">
            https://calendly.com/pages/dpa
          </a>
          .
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/6050" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/6050
          </a>
          .
        </p>
        <h4>Auftragsverarbeitung</h4>{' '}
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
          es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h3>Registrierung auf dieser Website</h3>{' '}
        <p>
          Sie k&ouml;nnen sich auf dieser Website registrieren, um zus&auml;tzliche Funktionen auf der Seite zu nutzen. Die dazu
          eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, f&uuml;r den Sie sich
          registriert haben. Die bei der Registrierung abgefragten Pflichtangaben m&uuml;ssen vollst&auml;ndig angegeben werden.
          Anderenfalls werden wir die Registrierung ablehnen.
        </p>{' '}
        <p>
          F&uuml;r wichtige &Auml;nderungen etwa beim Angebotsumfang oder bei technisch notwendigen &Auml;nderungen nutzen wir die bei der
          Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
        </p>{' '}
        <p>
          Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchf&uuml;hrung des durch die Registrierung
          begr&uuml;ndeten Nutzungsverh&auml;ltnisses und ggf. zur Anbahnung weiterer Vertr&auml;ge (Art. 6 Abs. 1 lit. b DSGVO).
        </p>{' '}
        <p>
          Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website registriert sind und werden
          anschlie&szlig;end gel&ouml;scht. Gesetzliche Aufbewahrungsfristen bleiben unber&uuml;hrt.
        </p>
        <h2>5. Analyse-Tools und Werbung</h2>
        <h3>Meta-Pixel (ehemals Facebook Pixel)</h3>{' '}
        <p>
          Diese Website nutzt zur Konversionsmessung den Besucheraktions-Pixel von Meta. Anbieter dieses Dienstes ist die Meta Platforms
          Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Meta jedoch auch in die USA
          und in andere Drittl&auml;nder &uuml;bertragen.
        </p>{' '}
        <p>
          So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Meta-Werbeanzeige auf die Website
          des Anbieters weitergeleitet wurden. Dadurch kann die Wirksamkeit der Meta-Werbeanzeigen f&uuml;r statistische und
          Marktforschungszwecke ausgewertet werden und zuk&uuml;nftige Werbema&szlig;nahmen optimiert werden.
        </p>{' '}
        <p>
          Die erhobenen Daten sind f&uuml;r uns als Betreiber dieser Website anonym, wir k&ouml;nnen keine R&uuml;ckschl&uuml;sse auf die
          Identit&auml;t der Nutzer ziehen. Die Daten werden aber von Meta gespeichert und verarbeitet, sodass eine Verbindung zum
          jeweiligen Nutzerprofil bei Facebook oder Instagram m&ouml;glich ist und Meta die Daten f&uuml;r eigene Werbezwecke, entsprechend
          der Meta-Datenverwendungsrichtlinie (
          <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">
            https://de-de.facebook.com/about/privacy/
          </a>
          ) verwenden kann. Dadurch kann Meta das Schalten von Werbeanzeigen auf Seiten von Facebook oder Instagram und sonstigen
          Werbekan&auml;len erm&ouml;glichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
        </p>{' '}
        <p>
          Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>Wir nutzen die Funktion des erweiterten Abgleichs innerhalb der Meta-Pixel.</p>{' '}
        <p>
          Der erweiterte Abgleich erm&ouml;glicht uns, verschiedene Arten von Daten (z.&nbsp;B. Wohnort, Bundesland, Postleitzahl, gehashte
          E-Mail-Adressen, Namen, Geschlecht, Geburtsdatum oder Telefonnummer) unserer Kunden und Interessenten, die wir &uuml;ber unsere
          Website sammeln an Meta zu &uuml;bermitteln. Hierdurch k&ouml;nnen wir unsere Werbekampagnen auf Facebook und Instagram noch
          pr&auml;ziser auf Personen zuschneiden, die sich f&uuml;r unsere Angebote interessieren. Au&szlig;erdem verbessert der erweiterte
          Abgleich Zuordnung von Webseiten-Conversions und erweitert Custom Audiences.
        </p>
        <p>
          Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Meta weitergeleitet
          werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam
          f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei
          ausschlie&szlig;lich auf die Erfassung der Daten und deren Weitergabe an Meta. Die nach der Weiterleitung erfolgende Verarbeitung
          durch Meta ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer
          Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{' '}
          <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/legal/controller_addendum
          </a>
          . Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Meta-Tools und f&uuml;r
          die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. F&uuml;r die Datensicherheit der
          Meta-Produkte ist Meta verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook oder
          Instagram verarbeiteten Daten k&ouml;nnen Sie direkt bei Meta geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend
          machen, sind wir verpflichtet, diese an Meta weiterzuleiten.
        </p>{' '}
        <p>
          Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie
          hier:{' '}
          <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/legal/EU_data_transfer_addendum
          </a>{' '}
          und{' '}
          <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">
            https://de-de.facebook.com/help/566994660333381
          </a>
          .
        </p>{' '}
        <p>
          In den Datenschutzhinweisen von Meta finden Sie weitere Hinweise zum Schutz Ihrer Privatsph&auml;re:{' '}
          <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">
            https://de-de.facebook.com/about/privacy/
          </a>
          .
        </p>{' '}
        <p>
          Sie k&ouml;nnen au&szlig;erdem die Remarketing-Funktion &bdquo;Custom Audiences&rdquo; im Bereich Einstellungen f&uuml;r
          Werbeanzeigen unter{' '}
          <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
          </a>{' '}
          deaktivieren. Dazu m&uuml;ssen Sie bei Facebook angemeldet sein.
        </p>{' '}
        <p>
          Wenn Sie kein Konto bei Facebook oder Instagram besitzen, k&ouml;nnen Sie nutzungsbasierte Werbung von Meta auf der Website der
          European Interactive Digital Advertising Alliance deaktivieren:{' '}
          <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener noreferrer">
            http://www.youronlinechoices.com/de/praferenzmanagement/
          </a>
          .
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/4452
          </a>
          .
        </p>
        <h3>Meta Conversion API</h3>{' '}
        <p>
          Wir haben die Meta Conversion API auf dieser Website eingebunden. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited,
          4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Meta jedoch auch in die USA und in andere
          Drittl&auml;nder &uuml;bertragen.
        </p>{' '}
        <p>
          Die Meta Conversion API erm&ouml;glicht es uns, die Interaktionen des Websitebesuchers mit unserer Website zu erfassen und an Meta
          weiterzugeben, um die Werbeperformance bei Facebook und Instagram zu verbessern.
        </p>{' '}
        <p>
          Hierzu werden insbesondere Zeitpunkt des Aufrufes, die aufgerufene Webseite, Ihre IP-Adresse und Ihr User-Agent sowie ggf. weitere
          spezifische Daten (z.&nbsp;B. gekaufte Produkte, Wert des Warenkorbs und W&auml;hrung) erfasst. Eine vollst&auml;ndige
          &Uuml;bersicht &uuml;ber die erfassbaren Daten finden Sie hier:{' '}
          <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/parameters" target="_blank" rel="noopener noreferrer">
            https://developers.facebook.com/docs/marketing-api/conversions-api/parameters
          </a>
          .
        </p>{' '}
        <p>
          Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG.
          Die Einwilligung ist jederzeit widerrufbar.
        </p>{' '}
        <p>
          Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Meta weitergeleitet
          werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam
          f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei
          ausschlie&szlig;lich auf die Erfassung der Daten und deren Weitergabe an Meta. Die nach der Weiterleitung erfolgende Verarbeitung
          durch Meta ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer
          Vereinbarung &uuml;ber gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{' '}
          <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/legal/controller_addendum
          </a>
          . Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der Datenschutzinformationen beim Einsatz des Meta-Tools und f&uuml;r
          die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. F&uuml;r die Datensicherheit der
          Meta-Produkte ist Meta verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook oder
          Instagram verarbeiteten Daten k&ouml;nnen Sie direkt bei Meta geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend
          machen, sind wir verpflichtet, diese an Meta weiterzuleiten.
        </p>{' '}
        <p>
          Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie
          hier:{' '}
          <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/legal/EU_data_transfer_addendum
          </a>{' '}
          und{' '}
          <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer">
            https://de-de.facebook.com/help/566994660333381
          </a>
          .
        </p>{' '}
        <p>
          In den Datenschutzhinweisen von Meta finden Sie weitere Hinweise zum Schutz Ihrer Privatsph&auml;re:{' '}
          <a href="https://de-de.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">
            https://de-de.facebook.com/about/privacy/
          </a>
          .
        </p>{' '}
        <p>
          Sie k&ouml;nnen au&szlig;erdem die Remarketing-Funktion &bdquo;Custom Audiences&rdquo; im Bereich Einstellungen f&uuml;r
          Werbeanzeigen unter{' '}
          <a href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
          </a>{' '}
          deaktivieren. Dazu m&uuml;ssen Sie bei Facebook angemeldet sein.
        </p>{' '}
        <p>
          Wenn Sie kein Konto bei Facebook oder Instagram besitzen, k&ouml;nnen Sie nutzungsbasierte Werbung von Meta auf der Website der
          European Interactive Digital Advertising Alliance deaktivieren:{' '}
          <a href="http://www.youronlinechoices.com/de/praferenzmanagement/" target="_blank" rel="noopener noreferrer">
            http://www.youronlinechoices.com/de/praferenzmanagement/
          </a>
          .
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/4452" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/4452
          </a>
          .
        </p>
        <h4>Auftragsverarbeitung</h4>{' '}
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
          es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h2>6. Newsletter</h2>
        <h3>Newsletter&shy;daten</h3>{' '}
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse sowie
          Informationen, welche uns die &Uuml;berpr&uuml;fung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit
          dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten
          verwenden wir ausschlie&szlig;lich f&uuml;r den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
        </p>{' '}
        <p>
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren
          Nutzung zum Versand des Newsletters k&ouml;nnen Sie jederzeit widerrufen, etwa &uuml;ber den &bdquo;Austragen&ldquo;-Link im
          Newsletter. Die Rechtm&auml;&szlig;igkeit der bereits erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
          unber&uuml;hrt.
        </p>{' '}
        <p>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem
          Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters oder nach
          Zweckfortfall aus der Newsletterverteilerliste gel&ouml;scht. Wir behalten uns vor, E-Mail-Adressen aus unserem
          Newsletterverteiler nach eigenem Ermessen im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu
          l&ouml;schen oder zu sperren.
        </p>{' '}
        <p>Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unber&uuml;hrt.</p>{' '}
        <p>
          Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
          einer Blacklist gespeichert, sofern dies zur Verhinderung k&uuml;nftiger Mailings erforderlich ist. Die Daten aus der Blacklist
          werden nur f&uuml;r diesen Zweck verwendet und nicht mit anderen Daten zusammengef&uuml;hrt. Dies dient sowohl Ihrem Interesse als
          auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne
          des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet.{' '}
          <strong>
            Sie k&ouml;nnen der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse &uuml;berwiegen.
          </strong>
        </p>
        <h2>7. eCommerce und Zahlungs&shy;anbieter</h2>
        <h3>Verarbeiten von Kunden- und Vertragsdaten</h3>{' '}
        <p>
          Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begr&uuml;ndung, inhaltlichen Ausgestaltung und
          &Auml;nderung unserer Vertragsbeziehungen. Personenbezogene Daten &uuml;ber die Inanspruchnahme dieser Website (Nutzungsdaten)
          erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu
          erm&ouml;glichen oder abzurechnen. Rechtsgrundlage hierf&uuml;r ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>{' '}
        <p>
          Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Gesch&auml;ftsbeziehung und Ablauf der ggf.
          bestehenden gesetzlichen Aufbewahrungsfristen gel&ouml;scht. Gesetzliche Aufbewahrungsfristen bleiben unber&uuml;hrt.
        </p>
        <h3>Daten&shy;&uuml;bermittlung bei Vertragsschluss f&uuml;r Online-Shops, H&auml;ndler und Warenversand</h3>{' '}
        <p>
          Wenn Sie Waren bei uns bestellen, geben wir Ihre personenbezogenen Daten an das zur Lieferung betraute Transportunternehmen sowie
          an den mit der Zahlungsabwicklung beauftragten Zahlungsdienstleister weiter. Es werden nur solche Daten herausgegeben, die der
          jeweilige Dienstleister zur Erf&uuml;llung seiner Aufgabe ben&ouml;tigt. Rechtsgrundlage hierf&uuml;r ist Art. 6 Abs. 1 lit. b
          DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet. Sofern
          Sie eine entsprechende Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO erteilt haben, werden wir Ihre E-Mail-Adresse an das mit der
          Lieferung betraute Transportunternehmen &uuml;bergeben, damit dieses Sie per E-Mail &uuml;ber den Versandstatus Ihrer Bestellung
          informieren kann; Sie k&ouml;nnen die Einwilligung jederzeit widerrufen.
        </p>
        <h3>Daten&shy;&uuml;bermittlung bei Vertragsschluss f&uuml;r Dienstleistungen und digitale Inhalte</h3>{' '}
        <p>
          Wir &uuml;bermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an
          das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
        </p>{' '}
        <p>
          Eine weitergehende &Uuml;bermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der &Uuml;bermittlung ausdr&uuml;cklich
          zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdr&uuml;ckliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt
          nicht.
        </p>{' '}
        <p>
          Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erf&uuml;llung eines
          Vertrags oder vorvertraglicher Ma&szlig;nahmen gestattet.
        </p>
        <h3>Zahlungsdienste</h3>{' '}
        <p>
          Wir binden Zahlungsdienste von Drittunternehmen auf unserer Website ein. Wenn Sie einen Kauf bei uns t&auml;tigen, werden Ihre
          Zahlungsdaten (z.&nbsp;B. Name, Zahlungssumme, Kontoverbindung, Kreditkartennummer) vom Zahlungsdienstleister zum Zwecke der
          Zahlungsabwicklung verarbeitet. F&uuml;r diese Transaktionen gelten die jeweiligen Vertrags- und Datenschutzbestimmungen der
          jeweiligen Anbieter. Der Einsatz der Zahlungsdienstleister erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsabwicklung) sowie im Interesse eines m&ouml;glichst reibungslosen, komfortablen und sicheren Zahlungsvorgangs (Art. 6
          Abs. 1 lit. f DSGVO). Soweit f&uuml;r bestimmte Handlungen Ihre Einwilligung abgefragt wird, ist Art. 6 Abs. 1 lit. a DSGVO
          Rechtsgrundlage der Datenverarbeitung; Einwilligungen sind jederzeit f&uuml;r die Zukunft widerrufbar.
        </p>
        <p>Folgende Zahlungsdienste / Zahlungsdienstleister setzen wir im Rahmen dieser Website ein:</p>
        <h4>Stripe</h4>{' '}
        <p>
          Anbieter f&uuml;r Kunden innerhalb der EU ist die Stripe Payments Europe, Ltd.,1 Grand Canal Street Lower, Grand Canal Dock,
          Dublin, Irland (im Folgenden &bdquo;Stripe&ldquo;).
        </p>{' '}
        <p>
          Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie
          hier:{' '}
          <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
            https://stripe.com/de/privacy
          </a>{' '}
          und{' '}
          <a href="https://stripe.com/de/guides/general-data-protection-regulation" target="_blank" rel="noopener noreferrer">
            https://stripe.com/de/guides/general-data-protection-regulation
          </a>
          .
        </p>{' '}
        <p>
          Details hierzu k&ouml;nnen Sie in der Datenschutzerkl&auml;rung von Stripe unter folgendem Link nachlesen:{' '}
          <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
            https://stripe.com/de/privacy
          </a>
          .
        </p>
        <h2>8. Audio- und Videokonferenzen</h2>
        <h4>Datenverarbeitung</h4>{' '}
        <p>
          F&uuml;r die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns
          genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre
          personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.
        </p>{' '}
        <p>
          Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre
          Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der
          Konferenz, Anzahl der Teilnehmer und sonstige &bdquo;Kontextinformationen&ldquo; im Zusammenhang mit dem Kommunikationsvorgang
          (Metadaten).
        </p>{' '}
        <p>
          Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich
          sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Ger&auml;te-IDs, Ger&auml;tetyp, Betriebssystemtyp und -version,
          Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.
        </p>{' '}
        <p>
          Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls
          auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten z&auml;hlen insbesondere Cloud-Aufzeichnungen, Chat-/
          Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die w&auml;hrend der
          Nutzung des Dienstes geteilt werden.
        </p>{' '}
        <p>
          Bitte beachten Sie, dass wir nicht vollumf&auml;nglich Einfluss auf die Datenverarbeitungsvorg&auml;nge der verwendeten Tools
          haben. Unsere M&ouml;glichkeiten richten sich ma&szlig;geblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere
          Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerkl&auml;rungen der jeweils eingesetzten
          Tools, die wir unter diesem Text aufgef&uuml;hrt haben.
        </p>{' '}
        <h4>Zweck und Rechtsgrundlagen</h4>{' '}
        <p>
          Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen
          gegen&uuml;ber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen
          Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6
          Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser
          Einwilligung; die Einwilligung ist jederzeit mit Wirkung f&uuml;r die Zukunft widerrufbar.
        </p>{' '}
        <h4>Speicherdauer</h4>{' '}
        <p>
          Die unmittelbar von uns &uuml;ber die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gel&ouml;scht, sobald
          Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
          entf&auml;llt. Gespeicherte Cookies verbleiben auf Ihrem Endger&auml;t, bis Sie sie l&ouml;schen. Zwingende gesetzliche
          Aufbewahrungsfristen bleiben unber&uuml;hrt.
        </p>{' '}
        <p>
          Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir
          keinen Einfluss. F&uuml;r Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.
        </p>{' '}
        <h4>Eingesetzte Konferenz-Tools</h4> <p>Wir setzen folgende Konferenz-Tools ein:</p>
        <h3>Zoom</h3>{' '}
        <p>
          Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose,
          CA 95113, USA. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerkl&auml;rung von Zoom:{' '}
          <a href="https://explore.zoom.us/de/privacy/" target="_blank" rel="noopener noreferrer">
            https://explore.zoom.us/de/privacy/
          </a>
          .
        </p>{' '}
        <p>
          Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gest&uuml;tzt. Details finden Sie
          hier:{' '}
          <a href="https://explore.zoom.us/de/privacy/" target="_blank" rel="noopener noreferrer">
            https://explore.zoom.us/de/privacy/
          </a>
          .
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/5728" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/5728
          </a>
          .
        </p>
        <h4>Auftragsverarbeitung</h4>{' '}
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
          es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h3>Microsoft Teams</h3>{' '}
        <p>
          Wir nutzen Microsoft Teams. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business
          Park, Leopardstown, Dublin 18, Irland. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerkl&auml;rung von Microsoft
          Teams:{' '}
          <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer">
            https://privacy.microsoft.com/de-de/privacystatement
          </a>
          .
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/6474" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/6474
          </a>
          .
        </p>
        <h4>Auftragsverarbeitung</h4>{' '}
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
          es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h2>9. Eigene Dienste</h2>
        <h3>Google Drive</h3>{' '}
        <p>
          Wir haben Google Drive auf dieser Website eingebunden. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon
          House, Barrow Street, Dublin 4, Irland.
        </p>{' '}
        <p>
          Google Drive erm&ouml;glicht es uns, einen Uploadbereich auf unserer Website einzubinden, in dem Sie Inhalte hochladen
          k&ouml;nnen. Wenn Sie Inhalte hochladen, werden diese auf den Servern von Google Drive gespeichert. Wenn Sie unsere Website
          betreten, wird au&szlig;erdem eine Verbindung zu Google Drive aufgebaut, sodass Google Drive feststellen kann, dass Sie unsere
          Website besucht haben.
        </p>{' '}
        <p>
          Die Verwendung von Google Drive erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
          Interesse an einem zuverl&auml;ssigen Uploadbereich auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde,
          erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
          widerrufbar.
        </p>
        <p>
          Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
          ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
          bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
          Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{' '}
          <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer">
            https://www.dataprivacyframework.gov/participant/5780
          </a>
          .
        </p>
        <h4>Auftragsverarbeitung</h4>{' '}
        <p>
          Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
          es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
          unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
      </Grid>
    </Grid>
  );
};

export default Imprint;
