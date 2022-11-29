export async function getDashboardData() {
  try {
    const response = await fetch("/api/dashboard");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getUsers() {
  try {
    const response = await fetch("/api/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}
