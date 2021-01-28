<template>
  <v-main fill-height fluid class="grey lighten-1 justify-space-between">
    <v-card outlined tile class="ma-6">
      <v-card-title> Bedienung der Website </v-card-title>
      <v-card-text>
        <div class="text--primary">
          <div class="font-weight-bold">Quiz:</div>
          Hier wird gespielt. <br />

          <div class="font-weight-bold">Create:</div>
          Hier können Topics mit Fragen erstellt und hochgeladen werden.
          <br />

          Um ein Topic mit Fragen zu erstellen müssen alle Felder korrekt
          ausgefüllt werden. Mit klicken auf Submit wird die Datei auf dem
          Server gespeichert. <br />
        </div>
      </v-card-text>
    </v-card>
    <v-card outlined tile class="ma-6">
      <v-card-title>Spielregeln</v-card-title>
      <v-card-text>
        <div class="text--primary">
          Jedes Team wählt in ihrem Zug eine Frage aus, bei richtiger Antwort
          gibts Punkte. <br />
          Ab Runde zwei hat das Team mit den wenigsten Punkten die Möglichkeit,
          wenn ein anderes Team ihre Frage falsch beantwortet hat, auf einen
          weiteren Versuch die Frage richtig zu beantworten.
          <br />
          Sobald alle Fragen bearbeitet wurden gewinnt das Team mit den meisten
          Punkten.
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>