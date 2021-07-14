import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  list: any = [
    {
      firstName: "wala",
      lastName: "nour",
      age: 25,
      sex: "female",
      phoneNumber: 52666666,
      email: "wala548@gmail.com",
      img: "https://s25456.pcdn.co/wp-content/uploads/2015/11/web1_Wylie.jpg",
      adress: "Ariana",
      case: "emergency",
      familyMembers: [
        {
          firstName: "rim",
          lastName: "nour",
          age: 21,
        },
        {
          firstName: "rihem",
          lastName: "nour",
          age: 16,
        },
        {
          firstName: "hanen",
          lastName: "nour",
          age: 51,
        },
      ],
      history: [
        {
          time: "2018-09-28T10:55:51",
          location: "26 street paradise Ariana ",
          case: "Breathing difficulties",
        },
        {
          time: "2019-02-12T08:02:50",
          location: "Tunis",
          case: "Severe pain",
        },
        {
          time: "2020-11-23T12:40:00",
          location: "technopole l'ghazella b24",
          case: "Epileptic seizure",
        },
      ],
    },
    {
      firstName: "halim",
      lastName: "boussada",
      age: 24,
      sex: "male",
      phoneNumber: 58000001,
      email: "halim123@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JMoFjtR2g4ErYbJzhqD1hp2Be8bm86Kflw&usqp=CAU",
      adress: "Tunis sud",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "mohamed",
      lastName: "marzouki",
      age: 33,
      sex: "male",
      phoneNumber: 92324000,
      email: "mhmd1234@gmail.com",
      img:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      adress: "la marsa",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "sabrin",
      lastName: "dehech",
      age: 29,
      sex: "female",
      phoneNumber: 21666789,
      email: "sabrin@gmail.com",
      img:
        "https://pbs.twimg.com/profile_images/929936057885384704/HnSIbCf8.jpg",
      adress: "bizerte",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "maissa",
      lastName: "benchaalia",
      age: 42,
      sex: "female",
      phoneNumber: 20999888,
      email: "benchaalia@gmail.com",
      img:
        "https://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1489053_profile.jpg",
      adress: "benArous",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "heni",
      lastName: "mezni",
      age: 30,
      sex: "male",
      phoneNumber: 98777111,
      email: "mezni444@gmail.com",
      img:
        "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      adress: "les berges du lac",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "majdi",
      lastName: "jouablia",
      age: 19,
      sex: "male",
      phoneNumber: 21985765,
      email: "majdiJou@gmail.com",
      img:
        "https://servivi.ca/wp-content/themes/classified-child/images/testimony-image-1.jpg",
      adress: "seliana",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "hanen",
      lastName: "harrathi",
      age: 52,
      sex: "female",
      phoneNumber: 97008900,
      email: "hnenharrathi97@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUvM4E5NTFmaIbXNR2rUhtEaQagK7uBgqpg&usqp=CAU",
      adress: "kasserine",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "achref",
      lastName: "bououn",
      age: 22,
      sex: "male",
      phoneNumber: 90111222,
      email: "bouou222@gmail.com",
      img:
        "https://s3media.247sports.com/Uploads/Assets/608/841/841608.jpg?fit=crop",
      adress: "manzel bourgiba",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "ali",
      lastName: "nasri",
      age: 59,
      sex: "male",
      phoneNumber: 41000999,
      email: "aliali999@gmail.com",
      img:
        "https://content.invisioncic.com/u312729/monthly_2021_06/6bf82635aca4a29ecd58fcc36291b09d142f32ed.thumb.jpeg.da88fd8a37ea651fd853945ec48ad89c.jpeg",
      adress: "tunis , beb el khadhra",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "fatma",
      lastName: "abed",
      age: 41,
      sex: "female",
      phoneNumber: 50111222,
      email: "fatmaabd2@gmail.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklj7qlnesMUcp6t_s1-5straJrmGe5xMkeA&usqp=CAU",
      adress: "beja",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
    {
      firstName: "chahd",
      lastName: "jlidi",
      age: 59,
      sex: "female",
      phoneNumber: 42564786,
      email: "chahdJli@gmail.com",
      img:
        "http://uofi150.news-gazette.com/images/profile-photos/profiles/Julie-Peoples.jpeg",
      adress: "Monastir",
      case: "emergency",
      familyMembers: [],
      hidstory: [],
    },
  ];
  ngOnInit(): void {}
  search(name) {
    console.log(name);
    var res = [];
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].firstName.toUpperCase().includes(name.toUpperCase())) {
        res.push(this.list[i]);
      }
    }
    this.list = res;
    this.ngOnInit();
  }
  goToProfile(obj) {
    localStorage.setItem("user", JSON.stringify(obj));
    this.router.navigateByUrl("/profile");
  }
}
