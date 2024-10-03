import { images } from "./images";
export const initialData = {
  todo: {
    id: crypto.randomUUID(),
    title: "To Do",
    tasks: [
      {
        id: crypto.randomUUID(),
        priority: "High",
        date: new Date(),
        title: "Update Website Homepage",
        image: images[0].imgUrl,
        description:
          "Revise the content and layout of the homepage to highlight new features and improve user engagement",
      },
    ],
  },

  inProgress: {
    id: crypto.randomUUID(),
    title: "In Progress",
    tasks: [
      {
        id: crypto.randomUUID(),
        priority: "low",
        date: new Date(),
        title: "Bug Fix - User Registration",
        description:
          "Investigate and resolve the reported bug in the user registration process where some users are unable to sign up.",
      },
      {
        id: crypto.randomUUID(),
        priority: "medium",
        date: new Date(),
        title: "Social Media Campaign",
        description:
          "Plan and execute a social media campaign for the upcoming product launch in February, including creatinq posts andscheduling updates,",
      },
    ],
  },

  underReview: {
    id: crypto.randomUUID(),
    title: "Under Review",
    tasks: [
      {
        id: crypto.randomUUID(),
        priority: "high",
        date: new Date(),
        title: "Mobile App Feature - Push Notifications",
        image: images[2].imgUrl,
        description:
          "Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibi lity with both iOS and Android platforms.",
      },
    ],
  },

  done: {
    id: crypto.randomUUID(),
    title: "Done",
    tasks: [
      {
        id: crypto.randomUUID(),
        priority: "low",
        date: new Date(),
        title: "Content Creation - Blog Post",
        description:
          "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
      },
      {
        id: crypto.randomUUID(),
        priority: "medium",
        date: new Date(),
        title: "IT Securiti audit",
        image: images[3].imgUrl,
        description:
          "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.",
      },
    ],
  },
};
