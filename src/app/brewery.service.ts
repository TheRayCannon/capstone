import { Injectable } from '@angular/core';
import { Brewery } from './models/Brewery';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


type BreweriesResponse = {
  breweries: Brewery[];
}

const breweryEndpoint = environment.baseApiUrl

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  breweries: Brewery[] =[{
    name:"Brass Brewing Co.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpqS73trY3lwFgdOTDaCbPPeoH4bXzzm7xA&usqp=CAU"
  },{
    name:"Cerburus Brewing Co.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtOJ0DErEfaX8sKEivT3pC0NP0E-JiejgjQ&usqp=CAU"
  },{
    name:"Pikes Peak Brewing Co.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_OAt1VPPJshMlXZjWE6UFqdB4gxnA3VQIw&usqp=CAU "
   },{
    name:"Battle Mt. Brewing Co.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTItrH1nIYBbYwLnrrB6RmnUbdZTZwnfgFQ&usqp=CAU "
   },{
    name:"Goat Patch Brewing Co. ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX62k3rSDdA96gH_6vwyOOdsAumUA79qRmFQ&usqp=CAU "
   },{
    name:"Mash Mechanix Brewing Co. ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgSiOdRUaKk0fyUPrYeee-uUsADMMKIBXVg&usqp=CAU "
   },{
    name:"Red Swing Brewhouse  ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmi7siOuL1Iz2eboPVhjBVbnw_T6jOyPYtA&usqp=CAU "
   },{
    name:"Whistle Pig Brewing Co. ",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/projects/404/18333101.548dc6c0112d5.jpg "
   },{
    name:"Metric Brewery ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJDwudpLMvqat9GuSD20Cf4Jm0LrzzilChg&usqp=CAU "
   },{
    name:"Storybook ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQda8cmkt5bxS_Pw-CVYliYgE9r4CEolxX3BA&usqp=CAU "
   },{
    name:"Fossil Craft Beer Co. ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3W2SzE--3ezv4ZL1NQhMXMBUYX77FV8Ik_Q&usqp=CAU "
   },{
    name:"Colorado Mountain Brewery ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMl08d0smD1-jWyniMXV2kgfw1gs-ggZFcXw&usqp=CAU "
   },{
    name:"Smiling Toad ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XxdSs3opCQ0ylUw4lUbRNNWQWBlwjZx10A&usqp=CAU "
   },{
    name:"Atrevida Beer Co. ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2xPW1npCUg7DE3OMigLSFnDSkubNC4-xUg&usqp=CAU "
   },{
    name:"Dueces Wild Brewery ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeiauOrS1QS208NL0QQ9wWyMIVviaN-aXOQ&usqp=CAU "
   },{
    name:"Cogstone Brewing ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetFRL_MtmwT0IgdcndVFTobJNBYB4uM63Zw&usqp=CAU "
   },{
    name:"Trinity Brewing ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yGZ-wuK3UkIA8LhCqxBVg93B8uUCufxuwg&usqp=CAU "
   },{
    name:"Lost Friends Brewing ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw66QxTz5iLv2YNg01tuoIJ1DE8wiKo27aUQ&usqp=CAU "
   },{
    name:"Bell Brothers Brewing ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbjqsRVSjrazwVPU7N1shYJt1IFvMrlCylg&usqp=CAU "
   },{
    name:"Oskar Blues' ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDku-8Bmsiu8IVmpQnHD52L9pe15AISsRkHA&usqp=CAU "
   },{
    name:"Nano 1089 Brewery ",
    imageUrl: "https://utfb-images.untappd.com/edzoh87r8fjrmvq5vvekaskbx0cq?auto=compress "
   },{
    name:"Rocky Mountain Brewery ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbupTMnsfZWr5lbjj0VcjHkwn60DDCz7ZoGw&usqp=CAU "
   },{
    name: "FH Beerworks ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfLsuuydQSJkZpgSKSN9R_P6BKgFm0lVjIA&usqp=CAU "
   },{
    name:"Peaks N Pines Brewery ",
    imageUrl: "https://www.coloradobrewerylist.com/wp-content/uploads/2015/05/peaks-and-pines.png "
   },{
    name:"Rock Bottom Brewery ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HSab6fEMf0jBQ-Utrxnq6Pchltwn86F2uA&usqp=CAU "
   },{
    name:"Manitou Brewing Co. ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCK_Mo7da1_dP196l5P3AMhp8Rdv83nEzFA&usqp=CAU "
   },{
    name:"Trails End Taproom ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ztrbHX5SoC72VCbOkLZ_GCNLCINTCjmLjg&usqp=CAU "
   },{
    name:" Black Forest Brewing Co.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVqAxOj3VSPyhpK8p8OiUl1L44Yr5mykS7Q&usqp=CAU "
   },{
    name:"JAKs Brewery & taproom",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBasrZuXEv9bQmEtEG4kiR54wHbwl4nwxt7g&usqp=CAU "
   },{
    name:"Wackadoo Brewing ",
    imageUrl: "https://lh5.googleusercontent.com/p/AF1QipOeT0eUecJsjMamaxyXQJC55rr0UbDRLvJUPqem=w408-h408-k-no "
   },{
    name:"BJ Restaurant & Brewhouse ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMajiyUuziYagmitHIET5Eh5GBTH-jd1ozg&usqp=CAU"
   },{
    name:"Boxing Brothers Ciderhouse ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCldhQiQruo-qQOH8llu1rvEvwFkKwHdxhnA&usqp=CAU "
   },{
    name:"Ivywild School, Bristol Brewing ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7Tao98_mhY33RrH4sHYGSAKdMTHPRyRGvw&usqp=CA "
   },{
    name:"Happy Tap ",
    imageUrl: "https://happytaptaproom.github.io/img/logo.JPG "
   },{
    name: "BATCH Slapped Brewery",
    imageUrl: "https://www.coloradobrewerylist.com/wp-content/uploads/2020/09/BatchSlapped.jpg "
   },{
    name:"Beasts & Brews ",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SXNbJFsH_uANB-Dq_j1Hp-97G17qFo2E1w&usqp=CAU "
   }
]

constructor(private http: HttpClient) {

}

fetchBreweries(){
  return this.http.get<BreweriesResponse>(breweryEndpoint)
}

}
