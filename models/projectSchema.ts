import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  backgroundImg: {
    type: String,
    required: [true, 'Background image is required'],
  },
  projectUrl: {
    type: String,
    required: [true, 'Project URL is required'],
  },
  link: {
    type: String,
    required: [true, 'Link is required'],
  },
  githubLink: {
    type: String,
    required: [true, 'GitHub link is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  technologies: {
    type: [String],
    required: [true, 'Technologies is required'],
  },
});

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
