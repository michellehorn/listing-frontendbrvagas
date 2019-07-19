import Api from './Api';

export default {

    listIssues() {
        return Api().get('issues');
    },

    getIssue(issue_id) {
        return Api().get('issues/' + issue_id);
    }
}