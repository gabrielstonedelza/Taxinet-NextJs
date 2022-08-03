import Image from "next/image"
import styles from "../styles/scaffolddetail/RequestDetail.module.css"

function ScaffoldRequestDetail({pPic,pName,title,sType,sPriority,sDescription,rType,pLoc,dLoc,pTime,sDate,dSchedules,tScheduled}) {
  return (
    <>
        <div className={styles.detailcontainer}>
            <h2>{title}</h2>
            <div>
                <div>
                   <Image src={pPic} alt="passengers profile" width={100} height={100}/>
                </div>
            </div>

        </div>
    </>
  )
}

export default ScaffoldRequestDetail