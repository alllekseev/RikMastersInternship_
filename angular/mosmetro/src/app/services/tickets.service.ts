export class Ticket {
  constructor(
    public id: number,
    public img_url: string,
    public name: string,
    public description: string) {
  }
}

export class TicketsService {

  getTickets(): Ticket {
    return new Ticket(
      1,
      "../../../../assets/images/tariff-ticket1.svg",
      "Билет «Единый»",
      "Билет «Единый» позволяет совершать поездки на метро, монорельсе, автобусе, троллейбусе или трамвае. Одна поездка по билету равна одному проходу на любом виде транспорта. Билет действует на всей территории Москвы, включая Зону Б.");
  }
}
