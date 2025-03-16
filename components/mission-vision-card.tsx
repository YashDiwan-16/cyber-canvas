
//       <section className="container py-16 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


//           <div className="bg-card rounded-lg p-8 border shadow-sm">
//             <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
//             <p className="text-muted-foreground mb-6">
//               To be recognized as the premier student organization that empowers
//               members to become leaders, innovators, and change-makers in their
//               respective fields.
//             </p>
//             <p className="text-muted-foreground">
//               We envision a community where creativity flourishes, diversity is
//               celebrated, and every member feels supported in pursuing their
//               passions.
//             </p>
//           </div>
//         </div>
//       </section>


type MissionVisionCardProps ={
    title: string;
    desc1: string;
    desc2: string;
}


const MissionVisionCard = ({title,desc1,desc2}: MissionVisionCardProps) => {
    return (
        
        <div className="bg-card rounded-lg p-8 border shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6">
       {desc1}
        </p>
        <p className="text-muted-foreground">
          {desc2}
        </p>
      </div>
    )};




export default MissionVisionCard;