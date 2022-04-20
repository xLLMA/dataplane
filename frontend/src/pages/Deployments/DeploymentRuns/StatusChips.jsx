import { Grid } from '@mui/material';
import CustomChip from '../../../components/CustomChip';
import { useGlobalFlowState } from '../../Flow';
import { useGlobalDeploymentState } from './GlobalDeploymentState';

export default function StatusChips() {
    // Global state
    const DeploymentState = useGlobalDeploymentState();
    const FlowState = useGlobalFlowState();

    return (
        <Grid item display="flex" alignItems="center" sx={{ alignSelf: 'center' }} ml={0} mr={1}>
            <CustomChip amount={Object.values(FlowState.elements?.get()).filter((a) => a.type !== 'custom').length || '0'} label="Steps" margin={2} customColor="orange" />
            <CustomChip
                amount={
                    (DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes?.get() &&
                        Object?.values(DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes.get())?.filter((a) => a?.status === 'Queue').length) ||
                    '0'
                }
                label="Queue"
                margin={2}
                customColor="purple"
            />
            <CustomChip
                amount={
                    (DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes?.get() &&
                        Object?.values(DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes.get())?.filter((a) => a?.status === 'Run').length) ||
                    '0'
                }
                label="Running"
                margin={2}
                customColor="blue"
            />
            <CustomChip
                amount={
                    (DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes?.get() &&
                        Object?.values(DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes.get())?.filter((a) => a?.status === 'Success').length) ||
                    '0'
                }
                label="Succeeded"
                margin={2}
                customColor="green"
            />
            <CustomChip
                amount={
                    (DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes?.get() &&
                        Object?.values(DeploymentState.runIDs[DeploymentState.selectedRunID.get()]?.nodes.get())?.filter((a) => a?.status === 'Fail').length) ||
                    '0'
                }
                label="Failed"
                margin={2}
                customColor="red"
            />
        </Grid>
    );
}