<template>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <!-- <a href="/">Stisla</a -->
                <nuxt-link to="/">Ruang Belajar Shift</nuxt-link>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <nuxt-link to="/">N-St</nuxt-link>
            </div>
            <ul class="sidebar-menu">
                <li class="menu-header">{{ $t('pages.menu') }}</li>
                <li :class="(this.$route.name == 'admin-dashboard') ? 'active':''">
                    <nuxt-link class="nav-link" :to="localePath('/admin/dashboard')"><i class="fas fa-fire"></i><span>{{ $t('pages.dashboard') }}</span></nuxt-link>
                </li>
                <!--
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Layout</span></a>
                    <ul class="dropdown-menu">
                        <li><nuxt-link class="nav-link" :to="localePath('/admin/dashboard')">{{ $t('pages.dashboard') }}</nuxt-link></li>
                        <li><a class="nav-link" href="/layout/transparent">Transparent Sidebar</a></li>
                        <li><a class="nav-link" href="/layout/top-layout">Top Navigation</a></li>
                    </ul>
                </li>
                <li :class="(this.$route.name == 'blank') ? 'active':''">
                    <nuxt-link class="nav-link" :to="localePath('blank')"><i class="far fa-square"></i><span>{{ $t('pages.blank') }}</span></nuxt-link>
                </li>
                -->
                <li>
                    <nuxt-link class="nav-link" :to="localePath('courses')"><i class="fas fa-book"></i><span>{{ $t('pages.courses') }}</span></nuxt-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    created() {
        // console.log(this.$route)
    },
};
</script>
