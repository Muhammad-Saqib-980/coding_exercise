# Coding Exercise
Coding Exercise
To make sure we’re all on the same page, applicants must complete a code challenge, using the
following stack:
1. Rails 7
2. SLIM
3. Hotwire
4. Stimulus
5. TurboFrames
6. Tailwind
7. MySQL
8. RSpec
9. Faker
The candidate will build a single page application. On entry, it shows the following buttons:
• Personal Data
• Employment
Clicking on Personal Data, will cause a Modal to appear, with the following entry fields:
• First Name – required, 25 character limit
• Last Name – required, 50 characters limit
• Nickname – not required
• Email Address - required
• Phone Number - required
The model will have Save & Cancel buttons.
Email field validation must be done dynamically, as the user enters it, cannot proceed to the
next field until this is filled and validated. Error will appear below the field if any.
Phone number validation must be done dynamically and needs to be in the form xxx-xxx-xxxx.
So, if the user enters 5551115555, as they’re entering it, it will be displayed as 555-111-5555.
When the form is saved, it automatically goes into the second form: Employment. This will also
be a modal. It will have the following fields:
• Employer - required
• Date Started - required
• Date Employment Ended - required
Date fields requirements: calendar widget as well as manual input with field validation and
automatic insertion of separators (MM/DD/YYYY)
There will be an “Add Employment” button. When clicked, a new set of employment fields are
added.
The Save button will be grayed out, until all the required fields are filled.
When you’re done with the exercise, please share your GitHub repo along with a Readme explaining what needs to be done to make the application run.
## Assumptions
  - We don't need models and data to be stored on database.
  - Handle all the states for forms on the front end.


## How to run
  - Go to the project directory
    - run command "bundle install"
    - run command "./bin/dev"
  - Open http://localhost:3000 in your browser