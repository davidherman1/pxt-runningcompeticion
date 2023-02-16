radio.setGroup(9)
radio.setTransmitPower(7)
let startTime = 0
let stopTime = 0
let zavod = false
input.onButtonPressed(Button.A, function() {
    zavod = true
})
input.onButtonPressed(Button.B, function () {
    zavod = false
    stopTime = 0
})
RunComp.SetLightLevel()
RunComp.OnLightDrop(function() {
    if (zavod === true) {
    radio.sendNumber(1)
}})
  radio.onReceivedNumber(function(receivedNumber: number) {

        music.playTone(Note.C, music.beat(BeatFraction.Sixteenth))
        if (receivedNumber === 55) {
        console.logValue("h", receivedNumber)
        stopTime = input.runningTime();
        basic.showNumber(stopTime / 1000);
    
        radio.sendNumber(2)
  }})

