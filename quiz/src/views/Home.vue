<template>
  <div class="home">
    <v-main>
        <v-card outlined tile max-width="800" centered class="ma-6">
          <v-card-title> Bedienung der Website </v-card-title>
          <v-card-text>
            <div class="font-weight-bold">Quiz:</div>
            Hier wird gespielt. <br />

            <div class="font-weight-bold">Settings:</div>
            Hier kann die Anzahl der Teams und die Teamnamen geändert werden.
            <br />

            <div class="font-weight-bold">Create:</div>
            Hier können Topics mit Fragen erstellt und hochgeladen werden.
            <br />

            Um ein Topic mit Fragen zu erstellen müssen alle Felder korrekt
            ausgefüllt werden. Mit klicken auf Submit wird dann eine Datei
            heruntergeladen. <br />
            Diese muss dann anschließend ausgewählt werden und mit dem button
            Upload hochgeladen werden.
          </v-card-text>
        </v-card>
      <v-card outlined tile max-width="800" centered class="ma-6">
        <v-card-title>Spielregeln</v-card-title>
        <v-card-text>
          Jedes Team wählt in ihrem Zug eine Frage aus, bei richtiger Antwort
          gibts Punkte. <br />
          Ab Runde zwei hat das Team mit den wenigsten Punkten die möglichkeit,
          wenn ein anderes Team ihre Frage falsch beantwortet hat, auf einen
          weiteren Versuch die Frage richtig zu beantworten. <br />
          Sobald alle Fragen bearbeitet wurden gewinnt das Team mit den meisten
          Punkten.
        </v-card-text>
      </v-card>
    </v-main>
  </div>
</template>