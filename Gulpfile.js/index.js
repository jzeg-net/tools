require('./common');
require('./tools_static');

const {task, series, parallel} = require('gulp');

// Combined tasks
// 合并任务
task("build_static",
    series(
        "build_static_tools",
        "build_static_common",
    )
);
task('watch_change',
    parallel(
        'watch_static',
        'watch_config_json',
    )
);
task('copy',
    parallel(
        'copy_common',
    )
);
