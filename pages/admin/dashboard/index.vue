<template>
    <section class="section">
        <div class="section-header">
            <h1>{{ $t('dashboard.section_header') }}</h1>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-3">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-primary">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>{{ $t('dashboard.stat.admin') }}</h4>
                        </div>
                        <div class="card-body">
                            10
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-danger">
                        <i class="far fa-newspaper"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>{{ $t('dashboard.stat.news') }}</h4>
                        </div>
                        <div class="card-body">
                            42
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-warning">
                        <i class="far fa-file"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>{{ $t('dashboard.stat.reports') }}</h4>
                        </div>
                        <div class="card-body">
                            1,201
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                <div class="card card-statistic-1">
                    <div class="card-icon bg-success">
                        <i class="far fa-circle"></i>
                    </div>
                    <div class="card-wrap">
                        <div class="card-header">
                            <h4>{{ $t('dashboard.stat.users') }}</h4>
                        </div>
                        <div class="card-body">
                            47
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="d-inline">Tasks</h4>
                        <div class="card-header-action">
                            <a href="#" class="btn btn-primary">View All</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled list-unstyled-border">
                            <li class="media">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cbx-1">
                                    <label class="custom-control-label" for="cbx-1"></label>
                                </div>
                                <img class="mr-3 rounded-circle" width="50" src="~/assets/img/avatar/avatar-4.png" alt="avatar">
                                <div class="media-body">
                                    <div class="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                                    <h6 class="media-title"><a href="#">Redesign header</a></h6>
                                    <div class="text-small text-muted">Alfa Zulkarnain <div class="bullet"></div> <span class="text-primary">Now</span></div>
                                </div>
                            </li>
                            <li class="media">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cbx-2" checked="">
                                    <label class="custom-control-label" for="cbx-2"></label>
                                </div>
                                <img class="mr-3 rounded-circle" width="50" src="~/assets/img/avatar/avatar-5.png" alt="avatar">
                                <div class="media-body">
                                    <div class="badge badge-pill badge-primary mb-1 float-right">Completed</div>
                                    <h6 class="media-title"><a href="#">Add a new component</a></h6>
                                    <div class="text-small text-muted">Serj Tankian <div class="bullet"></div> 4 Min</div>
                                </div>
                            </li>
                            <li class="media">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cbx-3" >
                                    <label class="custom-control-label" for="cbx-3"></label>
                                </div>
                                <img class="mr-3 rounded-circle" width="50" src="~/assets/img/avatar/avatar-2.png" alt="avatar">
                                <div class="media-body">
                                    <div class="badge badge-pill badge-warning mb-1 float-right">Progress</div>
                                    <h6 class="media-title"><a href="#">Fix modal window</a></h6>
                                    <div class="text-small text-muted">Ujang Maman <div class="bullet"></div> 8 Min</div>
                                </div>
                            </li>
                            <li class="media">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cbx-4">
                                    <label class="custom-control-label" for="cbx-4"></label>
                                </div>
                                <img class="mr-3 rounded-circle" width="50" src="~/assets/img/avatar/avatar-1.png" alt="avatar">
                                <div class="media-body">
                                    <div class="badge badge-pill badge-danger mb-1 float-right">Not Finished</div>
                                    <h6 class="media-title"><a href="#">Remove unwanted classes</a></h6>
                                    <div class="text-small text-muted">Farhan A Mujib <div class="bullet"></div> 21 Min</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Authors</h4>
                    </div>
                    <div class="card-body">
                        <div class="row pb-2">
                            <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                <div class="avatar-item mb-0">
                                    <img alt="image" src="~/assets/img/avatar/avatar-5.png" class="img-fluid" data-toggle="tooltip" title="Alfa Zulkarnain">
                                    <div class="avatar-badge" title="Editor" data-toggle="tooltip"><i class="fas fa-wrench"></i></div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                <div class="avatar-item mb-0">
                                    <img alt="image" src="~/assets/img/avatar/avatar-4.png" class="img-fluid" data-toggle="tooltip" title="Egi Ferdian">
                                    <div class="avatar-badge" title="Admin" data-toggle="tooltip"><i class="fas fa-cog"></i></div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                <div class="avatar-item mb-0">
                                    <img alt="image" src="~/assets/img/avatar/avatar-1.png" class="img-fluid" data-toggle="tooltip" title="Jaka Ramadhan">
                                    <div class="avatar-badge" title="Author" data-toggle="tooltip"><i class="fas fa-pencil-alt"></i></div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-3 col-lg-3 mb-4 mb-md-0">
                                <div class="avatar-item mb-0">
                                    <img alt="image" src="~/assets/img/avatar/avatar-2.png" class="img-fluid" data-toggle="tooltip" title="Ryan">
                                    <div class="avatar-badge" title="Admin" data-toggle="tooltip"><i class="fas fa-cog"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>

import { reactive, toRefs } from '@vue/composition-api';
import chartFunction from '~/functions/dashboard/index.js';

export default {
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    setup () {
        const { chart } = chartFunction();



        return {
            chart
        }
    }
}

</script>

<style>

</style>
