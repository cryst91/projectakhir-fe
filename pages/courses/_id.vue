<template>
    <section class="section">
        <div class="section-header">
            <h1>{{ $t('pages.courses') }}</h1>
        </div>

        <div class="section-body">
            <div class="row">
                <div class="col-lg-9 col-md-12 col-sm-12 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="d-inline">Silabus Kelas</h4>
                        </div>
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt tortor id lacinia molestie. Etiam nec interdum orci. Integer sed velit libero. Integer mattis mi ut magna pharetra, quis euismod arcu congue. Etiam nec erat ut leo rhoncus dapibus non a est. Nulla imperdiet eu risus at gravida. Vestibulum sit amet lacus sed tortor rutrum interdum quis eu ex. Aliquam pretium, leo placerat finibus tincidunt, quam ligula fermentum nunc, quis maximus nisi diam eget lacus. Nullam malesuada lacinia pellentesque. In sed augue nulla. Sed tempor enim massa, quis blandit odio tempus eu.
                            <br>
                            Vestibulum dolor sem, lobortis a nulla at, venenatis gravida arcu. Vivamus finibus elit purus, sit amet tristique tellus rutrum non. Mauris et nunc pretium, convallis nunc at, semper lorem. Ut sit amet dictum augue. Pellentesque in augue maximus, gravida sem id, aliquam ante. Nullam in consectetur neque, nec pharetra dui. Nunc et est diam. Sed convallis varius urna id tempus.
                            <br>
                            Suspendisse condimentum accumsan arcu, rhoncus pharetra nulla eleifend a. Integer tincidunt bibendum rhoncus. Maecenas eu augue nibh. Quisque eget libero erat. Cras id ante vitae diam consequat ornare. Phasellus leo neque, consequat a molestie at, elementum ac est. Donec sit amet lobortis libero. Nullam pulvinar ultricies congue. Nulla facilisi. Duis eu tincidunt orci, ut lacinia massa. Integer rutrum eros turpis, ut aliquam sem accumsan ac. Proin pulvinar nunc sit amet libero condimentum, nec ornare enim pulvinar. Fusce vestibulum sem ac sem hendrerit ullamcorper. Phasellus venenatis finibus urna, ac tincidunt ligula vestibulum in. Vivamus non eros ut ipsum aliquet fermentum. Donec rutrum suscipit sem.
                            <br>
                            Pellentesque libero lacus, mollis vitae blandit vitae, finibus ut ipsum. Proin tincidunt efficitur lorem, accumsan malesuada neque consequat ut. Nulla facilisi. Duis rutrum libero quam, pulvinar finibus quam faucibus sed. Praesent nisi ipsum, vehicula non finibus ac, consequat sed mauris. Nunc aliquet lorem eu nulla varius efficitur. Proin nulla dui, mattis nec ligula vestibulum, varius pellentesque ligula.
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9 col-md-12 col-sm-12 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="d-inline">List Sesi</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled list-unstyled-border">
                                <li class="media" v-for="(session, index) in sessionList" :key="index">
                                    <div class="media-body">
                                        <h6><nuxt-link :to="session.link">{{ session.title }}</nuxt-link></h6>
                                        <div class="text-small text-muted">{{ session.lecturer }}<div class="bullet"></div> <span class="text-primary">Dimulai Pada {{ session.startTime }}</span></div>
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
            sessionList: [
                {
                    title: "Test A",
                    description: "Test A Description",
                    link: '/courses/1/session/1',
                    lecturer: 'Ghany',
                    postedTime: '',
                    startTime: 'Jumat, 3 Juni 2022',
                    status: 'Not Finished'
                },
                {
                    title: "Test B",
                    description: "Test B Description",
                    link: '/courses/2/session/2',
                    lecturer: 'Fransiska',
                    postedTime: '',
                    startTime: 'Jumat, 10 Juni 2022',
                    status: 'Finished'
                },
                {
                    title: "Test C",
                    description: "Test A Description",
                    link: '/courses/3/session/3',
                    lecturer: 'Yhido',
                    postedTime: '',
                    startTime: 'Jumat, 17 Juni 2022',
                    status: 'In Progress'
                },
            ]
        }
    },
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    nuxtI18n: {
        paths: {
            id: '/courses/:id',
            en: '/courses/:id'
        }
    },
}
</script>

<style>
.wise-iframe-wrapper {
    position: relative;
    padding-bottom: 56.10%;
    height: 0;
    overflow: hidden;
}

.wise-iframe-wrapper iframe,
.wise-iframe-wrapper object,
.wise-iframe-wrapper embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75%;
}
</style>

