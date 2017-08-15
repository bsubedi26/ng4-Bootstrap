import { Injectable } from '@angular/core';


export const MailInboxMockData = {
  "cols": [
    "email",
    "phone",
    "company",
    "name"
  ],
  "data": [
    [
      "convallis.ante@Nullaeuneque.edu",
      "1-304-288-7440",
      "Lacus Institute",
      "Cadman Espinoza"
    ],
    [
      "fermentum@et.co.uk",
      "1-926-471-4189",
      "Curabitur Corporation",
      "Cruz Gilmore"
    ],
    [
      "tellus.justo@miDuisrisus.co.uk",
      "1-475-484-6601",
      "Cursus Nunc Consulting",
      "Boris Delgado"
    ],
    [
      "semper@Maurismagna.com",
      "1-802-421-8392",
      "Et Magnis Consulting",
      "Omar Petty"
    ],
    [
      "Fusce.diam@euismodet.net",
      "1-184-305-5375",
      "Nec Enim Consulting",
      "Chase Bush"
    ],
    [
      "Nulla.dignissim.Maecenas@Donecnonjusto.co.uk",
      "1-182-125-4693",
      "Nam Consequat Limited",
      "Jamal Fernandez"
    ],
    [
      "eu@justo.edu",
      "1-660-737-5604",
      "Magna Corporation",
      "Reed Cobb"
    ],
    [
      "Phasellus.vitae.mauris@Nam.com",
      "1-615-254-2468",
      "Lectus Cum Sociis Industries",
      "Dolan Kirby"
    ],
    [
      "Sed@Phasellusnulla.net",
      "1-742-420-1213",
      "Laoreet Ipsum Inc.",
      "Ivan Davidson"
    ],
    [
      "erat.vel@Phasellusinfelis.edu",
      "1-647-388-1870",
      "Lectus Associates",
      "Jarrod Pace"
    ],
    [
      "enim.Nunc.ut@Loremipsum.org",
      "1-297-377-4159",
      "Lorem Incorporated",
      "Jameson Mckenzie"
    ],
    [
      "Nunc@dapibusquam.org",
      "1-974-520-3609",
      "Nulla Facilisi Sed Limited",
      "Holmes Dillon"
    ],
    [
      "Lorem@consectetuer.com",
      "1-884-862-0198",
      "Dolor Elit Corporation",
      "Xavier Petersen"
    ],
    [
      "luctus.ut.pellentesque@sodales.ca",
      "1-845-384-8841",
      "Aliquam Fringilla LLC",
      "Gabriel Cobb"
    ],
    [
      "Aliquam.nec@variuset.org",
      "1-342-143-9574",
      "Neque Inc.",
      "Ulysses Boyer"
    ],
    [
      "Curae.Donec@risusMorbi.com",
      "1-774-744-6018",
      "Nibh Associates",
      "Graham Vaughan"
    ],
    [
      "varius.et.euismod@amalesuada.com",
      "1-246-379-1592",
      "Nulla Aliquet Proin Associates",
      "Jarrod Thornton"
    ],
    [
      "bibendum.Donec@duinec.co.uk",
      "1-694-610-1271",
      "Ullamcorper Duis Incorporated",
      "Zahir Peterson"
    ],
    [
      "Sed.et.libero@elitNullafacilisi.net",
      "1-487-607-9022",
      "Vitae Aliquam Consulting",
      "Jack Dotson"
    ],
    [
      "Curae.Donec@Craseu.edu",
      "1-750-182-4015",
      "Fusce LLP",
      "Cullen Cantu"
    ],
    [
      "sed.dolor@Proin.edu",
      "1-588-779-3226",
      "Mauris Elit Inc.",
      "Ryder Jensen"
    ]
  ]
}


export function getMailData() {
  return Promise.resolve(MailInboxMockData)
}