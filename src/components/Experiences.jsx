import PropTypes from 'prop-types';
import "../stylesheets/components/Experiences.css";

const Experiences = ({data}) => {
  const jobExperience = data.experiences
  return (
    <div className="experiences flexColumn">
      <h3 className="weightLight">{`${data.person?.name}'s experiences:`}</h3>
      {jobExperience.map((job) => {
        return (
          <div key={job.id}>
            <p className="weightNormal textYellow">{job.name}</p>
            <p className="weightNormal textGray">{job.organizations[0].name}</p>
            <p className="weightNormal textGray">{job.fromMonth} {job.fromYear} - {job.toMonth ? job.toMonth : "Now"} {job.toYear}</p>
          </div>
        );
      })}
    </div>
  )
}

Experiences.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Experiences;