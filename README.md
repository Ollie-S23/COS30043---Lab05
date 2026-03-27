# COS30043---Lab05

```
School of Science, Computing and Emerging Technologies
```
## COS30043 Interface Design and Development

## Lab 05. Components and Router

# Overview

In this lab, we will practice using components, router and methods.

The purpose of this assignment is to develop a web application using Vue 3 and Bootstrap.
This application allows users to browse for jobs and manage their tasks.

This web application consists of two sections: Job Explorer and To-Do List. The sample
screenshot below is only an illustration to help you understand the requirements. Please use
your own design while ensuring that all requirements are met.

In this lab, all resources (Bootstrap, Vue, and Vue Router) must be stored in your own
directory. This ensures stability and prevents unexpected behavior due to external framework
updates. Therefore, make sure you are using Bootstrap and Vue from your web server, not
through a CDN.

In this application, you must use Vue components for the root component and other required
components, placing each in a separate file. You should have the following components: App
(root component), JobList, JobDetail, JobOverview, and ToDoList. Please organise your
folders appropriately according to best practices.


# Job Explorer

This section needs to be implemented using Vue Router. It should display a list of job IDs on
the left, shown as links using <router-link>. An 'Overview' link should appear at the top of the
list. When the 'Overview' link or a job ID link is clicked, the corresponding overview description
or job details should be displayed on the right, including all relevant job fields in the detail view.

You need multiple components for this section. Place each in a separate file.

- App – the root component
- JobList – the job list component
- JobDetail – the job detail component
- JobOverview – the job overview component
- router – the router configuration

The job list is provided in the jobs.txt file, and you can hard-code it as a JavaScript array in
your code. You can also make minor improvements to the jobs.txt file while keeping the main
structure.


# To-Do List

Implement this section using the component named ToDoList. This section allows users to
manage a list of to-do tasks. They can add tasks, delete tasks, and update the priority of each
task (e.g., mark as High Priority or Low Priority).

There should be an Add button that allows users to enter a new task. Added tasks should
appear in a list, with new tasks inserted at the beginning of the array.

Each task should have a Delete button that allows users to remove the task, and a Toggle
Priority button that cycles between High Priority and Low Priority. When a task is marked as
High Priority, append the text '(High Priority)' to the task. When marked as Low Priority, append
the text '(Low Priority)'. The button caption should also toggle between 'Mark as High Priority'
and 'Mark as Low Priority' accordingly.

# Submission

Submit your source code to Canvas and demonstrate your work to the tutor.


