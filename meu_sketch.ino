// meu_sketch.ino

// Define o pino do LED
const int ledPin = 13;

void setup() {
  // Configura o pino do LED como saída
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Liga o LED
  digitalWrite(ledPin, HIGH);
  // Espera por 1 segundo (1000 milissegundos)
  delay(1000);
  // Desliga o LED
  digitalWrite(ledPin, LOW);
  // Espera por 1 segundo (1000 milissegundos)
  delay(1000);
}
