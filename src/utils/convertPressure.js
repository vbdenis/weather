//Преобразуем давление из гПа в мм.рт.ст и округляем
export default function(pressure) {
    return pressure = Math.round(pressure * 0.750063755419211);
}
