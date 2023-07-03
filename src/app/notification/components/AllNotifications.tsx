import SingleNotification from './SingleNotification'

export default function AllNotifications() {
    const details = [

        {
            title: "New Bond Annocement",
            details: " MeatFarm Bond is scheduled to be released from the 12th of June to 20th of July. The release of bonds to the general public by MeatFarm has been announced by the President of the company by  Dr. Ji Song",
            date:"Today 6:00 am"
        },
        {
            title: "New Bond Annocement",
            details: " MeatFarm Bond is scheduled to be released from the 12th of June to 20th of July. The release of bonds to the general public by MeatFarm has been announced by the President of the company by  Dr. Ji Song",
            date:"Today 6:00 am"
        },
        {
            title: "New Bond Annocement",
            details: " MeatFarm Bond is scheduled to be released from the 12th of June to 20th of July. The release of bonds to the general public by MeatFarm has been announced by the President of the company by  Dr. Ji Song",
            date:"Today 6:00 am"
        }
    ]
  return (
    <div>
        {
            details.map((detail, index)=>(

                <SingleNotification key={index} id={index} title={detail.title} details={detail.details} date={detail.date}/>
            ))
        }
    </div>
  )
}
