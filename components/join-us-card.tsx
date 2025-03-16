import { CheckCircle } from "lucide-react"


// <div className="bg-card rounded-lg p-8 border shadow-sm">
//     <ul className="space-y-4">
//         <li className="flex items-start">
//             <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
//             <div>
//                 <h3 className="font-bold mb-1">Skill Development</h3>
//                 <p className="text-muted-foreground">
//                     Enhance your technical, leadership, and communication skills
//                     through hands-on projects and workshops.
//                 </p>
//             </div>
//         </li>
//         <li className="flex items-start">
//             <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
//             <div>
//                 <h3 className="font-bold mb-1">Networking Opportunities</h3>
//                 <p className="text-muted-foreground">
//                     Connect with peers, alumni, and industry professionals who
//                     share your interests.
//                 </p>
//             </div>
//         </li>
//         <li className="flex items-start">
//             <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
//             <div>
//                 <h3 className="font-bold mb-1">Resume Enhancement</h3>
//                 <p className="text-muted-foreground">
//                     Add valuable experience to your resume through participation
//                     in club activities and leadership roles.
//                 </p>
//             </div>
//         </li>
//     </ul>
// </div>


const JoinUsBlock = ({ title, desc }: { title: string, desc: string }) => {
    return (

        <li className="flex items-start">
            <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
            <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-muted-foreground">
                    {desc}
                </p>
            </div>
        </li>
    )
};

const JoinUsCard = ({joinus}:{joinus:{title:string , desc:string}[]}) => {
    return (
        <div className="bg-card rounded-lg p-8 border shadow-sm">
            <ul className="space-y-4">
                {joinus.map((join , index)=>(
                    <JoinUsBlock title={join.title} desc={join.desc} key={index}/>
                )
            )}
            
            </ul>
        </div>
    )

};

export default JoinUsCard;