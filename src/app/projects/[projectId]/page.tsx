import React from 'react';
import ProjectContent from '@/components/project/ProjectContent';

export default function ProjectPage({ params }: { params: { projectId: string } }) {
  return <ProjectContent />;
}
