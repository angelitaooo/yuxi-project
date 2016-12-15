Yuxi Pacific Education Site
===

# NPM Packages Used
## CSS related Packages
### Foundation framework
`npm install foundation-sites --save`

### Font Awesome
`npm install font-awesome --save`

### Pure css loader
`npm install pure-css-loader --save`

#### Usage
```css
// src/style.css
@import "~foundation-sites/dist/css/foundation.min.css";
@import "~font-awesome/css/font-awesome.min.css";
@import "~pure-css-loader/dist/css-loader.css";
```

## Javascript Packages

### Moment
`npm install moment --save`

#### Usage
```js
// src/app/courses/course-status/course-status.component.ts
import * as moment  from 'moment';
```

I used this Package in CourseStatusComponent to get the difference in days and then make the circle change its color.
```js
getDifference() {
  const today = moment();
  const date = moment(this.date, 'YYYY-MM-DD');
  const result = date.diff(today, 'days');
```
### UUID
`npm install angular2-uuid --save`
#### Usage
In teacher.service.ts and courses.service.ts
```js
import { UUID } from 'angular2-uuid';
```
I used this package to generate an unique random id for each teacher and course. I used this because I didn't want to check manually for the next course or teacher id on Creating.
```js
//src/app/teachers/teacher.service.ts
addTeacher(teacher: Teacher) {
  // Creating
  if (!teacher.id) {
    teacher.id = UUID.UUID();
    this.teachers.push(teacher);
  } else {
    let teacherIndex;
```

### Lodash
`npm install lodash --save`

#### Usage
```js
// src/app/courses/courses.component.ts
import * as _ from 'lodash';
```

I used this Package in CoursesComponent and TeachersComponent to sort courses data.

```js
sortTable(sorter: string) {
  switch (sorter) {
    case 'name':
      this.courses = _.sortBy(this.courses, [(course) => course.name ]);
      break;
    case 'duration':
      this.courses = _.sortBy(this.courses, [(course) => course.duration ]);
      break;
    case 'date':
      this.courses = _.sortBy(this.courses, [(course) => course.date ]);
      break;
  }
}
```


## DEVELOPMENT PROCESS

1. Create html templates and their respective routes.
2. Create welcome, courses, teachers and shared modules.

  2.1 Create navigation component inside the shared module because it will be shown in three out of five templates.

  2.2 I made welcome a module because it can 'grow' in the future and need a service for example.
3. Create services to transport data to the components when needed.
4. Use angular forms module.
5. Sorting table methods.
6. Visual cue component. Needed to add a life cycle method so it can listen to changes.

  6.1 This is not a shared component because it is only used in courses component.
7. Adding active routes for the navigation component.
8. Adding loading animation in index.html.

## Project Management
1. I used Github projects to keep track of my work. [Boards](https://github.com/angelitaooo/yuxi-project/projects)
2. I created a pull request for each "chunk" of work. It was easier for me to keep track of the progress using pull requests. [Pull Requests](https://github.com/angelitaooo/yuxi-project/pulls?utf8=%E2%9C%93&q=)
