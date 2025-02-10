
import styles from "./Milestone.module.css";
const milestoneData = [
  {
    imgUrl: "src/assets/milestoneImg/Frame 21505_1.svg",
    head: "100,000+",
    head2: "Integrated Profiles",
  },
  {
    imgUrl: "src/assets/milestoneImg/Frame 21505_2.svg",
    head: "50,000+",
    head2: "Active Monthly Users",
  },
  {
    imgUrl: "src/assets/milestoneImg/Frame 21505_3.svg",
    head: "10,000+",
    head2: "Success Stories",
  },
];

const Milestone = () => {
  return (
    <>
    <div className={styles.milestoneDiv}>
      <h1>Milestones</h1>
      <div className={styles.milestone_detail_container}>
        {milestoneData.map((item, index) => (
          <div key={index} className={styles.milestone_eachContainer}>
            <img src={item.imgUrl} />
            <div className={styles.milestone_textContainer}>
              <h1>{item.head}</h1>
              <p>{item.head2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Milestone;
