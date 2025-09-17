import GitHubCalendar from "react-github-calendar";
import "./GithubActivity.css"
export default function GithubActivity() {
  return (
    <section className="github-activity-container">
      <h2>Github Activity</h2>
      <GitHubCalendar
        username="moonhuntercode"
        />
    </section>
  )
}
