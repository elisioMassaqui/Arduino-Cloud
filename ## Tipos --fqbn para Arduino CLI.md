## Tipos --fqbn para Arduino CLI

O parâmetro --fqbn significa "Fully Qualified Board Name". Em português, poderia ser traduzido como "Nome Completo da Placa". Este parâmetro é usado no Arduino CLI para especificar completamente o tipo de placa Arduino para a qual você está compilando ou fazendo o upload de um sketch. Ele inclui informações detalhadas sobre a plataforma, arquitetura e o modelo específico da placa que está sendo utilizada.

### Placas Arduino AVR

- **Arduino Uno:** `arduino:avr:uno`
- **Arduino Mega:** `arduino:avr:mega`
- **Arduino Nano:** `arduino:avr:nano`
- **Arduino Leonardo:** `arduino:avr:leonardo`
- **Arduino Micro:** `arduino:avr:micro`
- **Arduino Pro or Pro Mini:** `arduino:avr:pro`

### Placas ESP8266

- **NodeMCU 1.0 (ESP-12E Module):** `esp8266:esp8266:nodemcu`
- **Generic ESP8266 Module:** `esp8266:esp8266:generic`
- **Adafruit HUZZAH ESP8266:** `adafruit:esp8266:huzzah`

### Placas ESP32

- **ESP32 Dev Module:** `esp32:esp32:esp32`
- **NodeMCU-32S:** `esp32:esp32:nodemcu-32s`
- **ESP-WROOM-32:** `esp32:esp32:esp32dev`

### Placas Arduino SAMD (ARM)

- **Arduino Zero:** `arduino:samd:arduino_zero_native`
- **Arduino MKR1000:** `arduino:samd:mkr1000`
- **Adafruit Metro M0 Express:** `adafruit:samd:adafruit_metro_m0`

### Outras Placas

- **Adafruit Feather M0 (SAMD21 Cortex M0+):** `adafruit:samd:adafruit_feather_m0`
- **SparkFun ESP32 Thing:** `sparkfun:esp32:thing`
- **Teensy 3.2:** `teensy:avr:teensy31`
- **BBC micro:bit:** `sandeepmistry:nrf5:bbc_microbit`
- **STM32F4 Discovery:** `stm32duino:STM32F4:STM32F4_Discovery`

Esses são exemplos de tipos `--fqbn` para várias placas comuns que podem ser usados com o Arduino CLI para compilar e fazer o upload de sketches. Escolha o tipo `--fqbn` apropriado para a sua placa específica ao desenvolver seus projetos Arduino.
