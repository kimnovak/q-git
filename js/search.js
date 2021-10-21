const data = [{title: 'fe'}, {title: 'devops'}];

window.addEventListener('load', init);


function init() {
    const $jobsList = document.getElementById('jobs-list');
    renderJobs({$listContainer: $jobsList, data});
}

function renderJobs({$listContainer, data}) {
    const $container = new DocumentFragment();

    if (!Array.isArray(data) || !data.length) {
        const $noResults = document.createElement('li');
        $noResults.innerHTML = 'No results';
        $listContainer.append($noResults);

        return;
    }

    data.forEach(job => {
        const $job = document.createElement('li');
        $job.classList.add('js-job');
        $job.textContent = job.title;

        $container.append($job);
    });

    $listContainer.append($container);
}