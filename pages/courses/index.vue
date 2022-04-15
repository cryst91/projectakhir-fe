<template>
    <section class="section">
        <div class="section-header">
            <h1>{{ $t('pages.courses') }}</h1>
        </div>

        <div class="section-body">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="d-inline">Courses</h4>
                            <div class="card-header-action">
                                <a href="#" class="btn btn-primary">View All</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled list-unstyled-border">
                                <li class="media" v-for="(course, index) in courseList" :key="index">
                                    <div class="media-body">
                                        <div class="badge badge-pill badge-danger mb-1 float-right">{{ course.status }}</div>
                                        <h6 class="media-title"><a :href="course.link">{{ course.title }}</a></h6>
                                        <div class="text-small text-muted">{{ course.author }}<div class="bullet"></div> <span class="text-primary">Now</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            courseList: [
                {
                    title: "Test A",
                    description: "Test A Description",
                    link: '/courses/1',
                    author: 'Ghany',
                    postedTime: '',
                    status: 'Not Finished'
                },
                {
                    title: "Test B",
                    description: "Test B Description",
                    link: '/courses/2',
                    author: 'Fransiska',
                    postedTime: '',
                    status: 'Finished'
                },
                {
                    title: "Test C",
                    description: "Test A Description",
                    link: '/courses/3',
                    author: 'Yhido',
                    postedTime: '',
                    status: 'In Progress'
                },
            ]
        }
    },
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    nuxtI18n: {
        paths: {
            id: '/courses',
            en: '/courses'
        }
    },
}
</script>

<style>

</style>

