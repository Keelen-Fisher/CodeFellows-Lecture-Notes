# Access Control (ACL)

## 5 Steps to RBAC [READ:](https://www.csoonline.com/article/3060780/security/5-steps-to-simple-role-based-access-control.html)

- What is Role Based Access Control (RBAC) and why do we care?

RBAC is the idea of assigning system access to users based on their role in an organization. This is important to share security to defend against advanced attack. In addition, the assignment of access rights becomes systematic and repeatable.

- Describe a Role/Permission hierarchy that you might implement using RBAC.

Payroll manager, project members, healthcare professionals, etc.

- What approach might you take to implement RBAC?

Inventory your Systems -> Analyze workforce and create roles -> Assign people to roles -> Never make one-off changes -> Audit

## RBAC - Wiki Search [READ](https://en.wikipedia.org/wiki/Role-based_access_control)

- If Authentication is “you are who you say you are,” what is Authorization?

Authorization is the evaluation of the user's access rights.

- Name three primary rules defined for RBAC.

  - Role assignment: A subject can exercise a permission only if the subject has selected or been assigned a role.
  - Role authorization: A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.
  - Permission authorization: A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.

- Describe RBAC to a non-technical friend.

In general, RBAC is a way to set roles to job functions across companies. Provided with the necessary permission, users can perform specific roles.

## RBAC tutorial [WATCH](https://www.youtube.com/watch?v=C4NP8Eon3cA)

- What Are access rights Associated with? The User? or The Role? Explain.

It is associated with the role and not the user. This is to define the roles and resources that are defined for them. This is then applied to the users. User -> Role -> Rights

- Access Rights, or Authorization, is activated after a user successfully does what?

When the user is authorized.

- Explain how RBAC might benefit a business.

Users who come and go do not take their designates roles with them leaving it empty for a long period of time. It is a role specific right so this can apply to any user who is authorized.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
